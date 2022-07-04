import { appDB } from "../firebase";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

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
    console.error("firestoreUtil.createWithId: ", error);
    return false;
  }
};

/**
 * Creates a document with an auto-generated Id
 * @param {object} objData
 * @param  {string[]} arrPath
 * @returns {Promise<string>} - Returns the Id of the recently created document
 */
const createWithGeneratedId = async (objData, ...arrPath) => {
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

export { createWithId, createWithGeneratedId };
