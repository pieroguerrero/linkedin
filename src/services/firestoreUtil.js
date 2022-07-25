import { appDB } from "../firebase";
import {
  setDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  // eslint-disable-next-line no-unused-vars
  QueryConstraint,
  where,
  query,
  getDocs,
  startAfter,
  orderBy,
  limit,
} from "firebase/firestore";

// const proDoc = (async () => {
//   const { doc } = await import("firebase/firestore");
//   return doc;
// })();

/**
 * Contains the basic methods to interact with a Firestore Database
 * @module FirestoreUtil
 */

/**
 * Creates a document with a Custom Id
 * @param {Object} objData - Data to be stored.
 * @param {string} strId - Id of the document to be created.
 * @param {string[]} arrPath - Path to select the collection where the new Document is going to be created.
 * @returns {Promise<boolean>}
 */
const createWithId = async (objData, strId, ...arrPath) => {
  const arrNewPath = [...arrPath, strId];
  try {
    const objDocReference = doc(appDB, arrNewPath[0], ...arrNewPath.slice(1));
    await setDoc(objDocReference, objData);
    return true;
  } catch (error) {
    console.error("firestoreUtil.create: ", error);
    return false;
  }
};

/**
 *
 * @param {Object} objDocReference
 * @param {Object} objData
 * @returns {Promise<boolean>}
 */
const saveDoc = async (objDocReference, objData) => {
  try {
    await setDoc(objDocReference, objData);
    return true;
  } catch (error) {
    console.error("firestoreUtil.saveDoc: ", error);
    return false;
  }
};

/**
 * Creates a document with a Custom Id
 * @param {string[]} arrPath - Path to select the collection where the new Document is going to be created.
 * @returns
 */
const getDocumentCreator = (...arrPath) => {
  try {
    const collectionRef =
      arrPath.length > 1
        ? collection(appDB, arrPath[0], ...arrPath.slice(1))
        : collection(appDB, arrPath[0]);

    const objDocReference = doc(collectionRef);
    return {
      strNewId: objDocReference.id,
      /**
       * @type {function(Object):Promise<boolean>}
       */
      saveDoc: saveDoc.bind(null, objDocReference),
    };
  } catch (error) {
    console.error("firestoreUtil.getDocumentCreator: ", error);
    return null;
  }
};

/**
 * Creates a document with an auto-generated Id
 * @param {object} objData
 * @param  {string[]} arrPath
 * @returns {Promise<string>} - Returns the Id of the recently created document
 */
const create = async (objData, ...arrPath) => {
  let docRef;

  try {
    const collectionRef =
      arrPath.length > 1
        ? collection(appDB, arrPath[0], ...arrPath.slice(1))
        : collection(appDB, arrPath[0]);
    docRef = await addDoc(collectionRef, objData);
    return docRef.id;
  } catch (error) {
    console.error("firestoreUtil.createWithGeneratedId", error);
    return "";
  }
};

/**
 * Selects a document by Id
 * @param {string} strId - Id of the document to be created.
 * @param {string[]} arrPath - Path to select the collection where the Document is located.
 * @returns {Promise<object>}
 */
const selectById = async (strId, ...arrPath) => {
  const arrFullPath = [...arrPath, strId];
  try {
    const docRef = doc(appDB, arrFullPath[0], ...arrFullPath.slice(1));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data() };
    } else {
      console.warn(
        "firestoreUtil.dbSelect: There was no document with id:",
        strId
      );
    }
  } catch (error) {
    console.error("firestoreUtil.dbSelect:", error);
  }

  return null;
};

/**
 * @typedef {Object} QueryClause
 * @property {string} strType
 * @property {string} strField
 * @property {string} strLogicOperator
 * @property {object} objValue
 */

/**
 * Selects all the documents in a Collection filtered by specific constraints.
 * @param {QueryConstraint[]} arrConstraints
 * @param {string[]} arrPathToCollection - Path to select the collection where the Document is located.
 * @returns
 */
const selectAll = async (arrConstraints, ...arrPathToCollection) => {
  try {
    const collectionRef =
      arrPathToCollection.length > 1
        ? collection(
            appDB,
            arrPathToCollection[0],
            ...arrPathToCollection.slice(1)
          )
        : collection(appDB, arrPathToCollection[0]);

    const queryDoc = query(collectionRef, ...arrConstraints);
    const querySnapshot = await getDocs(queryDoc);

    return querySnapshot.docs;
  } catch (error) {
    console.error("firestoreUtil.dbSelect:", error);
    return null;
  }
};
/**
 *
 * @param {object} objStartKey
 * @param {number} intLimitNumber
 * @param {string} strOrderByFieldName
 * @param {QueryConstraint[]} arrWhereConstraints
 * @param {function(Object):Object} funFromFirestore
 * @param {string[]} arrPathToCollection - Path to select the collection where the Document is located.
 * @returns
 */
const getBatch = async (
  objStartKey,
  strOrderByFieldName,
  intLimitNumber,
  arrWhereConstraints,
  funFromFirestore,
  ...arrPathToCollection
) => {
  try {
    const collectionRef =
      arrPathToCollection.length > 1
        ? collection(
            appDB,
            arrPathToCollection[0],
            ...arrPathToCollection.slice(1)
          )
        : collection(appDB, arrPathToCollection[0]);

    const queryNextBatch = query(
      collectionRef,
      ...arrWhereConstraints,
      orderBy(strOrderByFieldName),
      startAfter(objStartKey), //TODO:check how this can be changed to cover the case of the first load
      limit(intLimitNumber)
    );

    const querySnapshot = await getDocs(queryNextBatch);

    const arrFormatedData = querySnapshot.docs.map((objDocData) =>
      funFromFirestore(objDocData.data())
    );

    return arrFormatedData;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export {
  createWithId,
  create,
  selectById,
  selectAll,
  getBatch,
  where,
  getDocumentCreator,
  startAfter,
  orderBy,
  limit,
};
