//import { Dispatch, AnyAction } from "@reduxjs/toolkit";
//import { UserCredential } from "firebase/auth";
import { setLoggedUser } from "../../../../redux/states/logedUserSlice";
import { createUser, getUser } from "../../../../services/serviceUser";
import {
  AuthenticationMethods,
  Constants,
  NavigationPaths,
} from "../../../../utilities";
// eslint-disable-next-line no-unused-vars
import { NavigateFunction } from "react-router-dom";
import { getBlobFile } from "../../../../services/serviceIO";

import {
  anonymousSignInUser,
  googleSignInUser,
  isNewUser,
} from "../../../../services/serviceUserAuth";
import { saveFile } from "../../../../services/firestorageUtil";
import AnonymousUserData from "../../../../utilities/AnonymousUserData";
import {
  createProfile,
  getMainProfile,
} from "../../../../services/serviceProfile";

// const promiseServAuth = (async () => {
//   const { anonymousSignInUser, googleSignInUser, isNewUser } = await import(
//     "../../../../services/serviceUserAuth"
//   );
//   return {
//     anonymousSignInUser,
//     googleSignInUser,
//     isNewUser,
//   };
// })();

// const promiseSaveFile = (async () => {
//   const { saveFile } = await import("../../../../services/firestorageUtil");
//   return saveFile;
// })();

/**
 * Analyzes the profile picture url provided, if it contains data then it will be stored in the firestorage, otherwise, it will store a defatul picture. Returns the public URL of the recently saved picture.
 * @param {string | null} strPhotoURL
 * @param {string} strUserId
 * @returns {Promise<string | null>}
 */
// eslint-disable-next-line no-unused-vars
const processProfilePhotoURL = async (strPhotoURL, strUserId) => {
  if (strPhotoURL && strPhotoURL.length > 0) {
    const objBlob = await getBlobFile(strPhotoURL, {
      referrerPolicy: "no-referrer",
    });

    if (objBlob) {
      const strPicDestinationPath =
        strUserId + "/" + Constants.ProfilePictureName;
      //const saveFile = await promiseSaveFile;
      const objURLs = await saveFile(strPicDestinationPath, objBlob);
      return objURLs?.strFileURL ?? null;
    }
  }

  return null;
};

/**
 *
 * @returns {Promise<string>}
 */
const getDefaultProfilePicUrl = async () => {
  const { DatabaseValues } = await import(
    "./../../../../utilities/DatabaseValues"
  );
  const objDefaultPhotoURL = await DatabaseValues;
  return objDefaultPhotoURL ? objDefaultPhotoURL.strDefaultProfilePicURL : "";
};

/**
 * @param {Object} dispatch
 * @param {NavigateFunction} objNavigate
 * @param {string} strUserId
 * @return {Promise<void>}
 */
const handleExistingUser = async (strUserId, dispatch, objNavigate) => {
  const objExistingUser = await getUser(strUserId);
  if (objExistingUser) {
    const objMainProfile = await getMainProfile(objExistingUser.strUserId);
    if (objMainProfile) {
      objExistingUser.setProfile(objMainProfile);
      dispatch(setLoggedUser(objExistingUser));
      objNavigate(NavigationPaths.FEED, { state: { loggedIn: true } });
    }
  }
};

/**
 *
 * @param {string} strUserOwnerId
 * @param {string} strAbout
 * @param {string} strProfilePicURL
 * @param {string} strFullName
 * @param {string} strHeadLine
 * @param {string} strCountry
 * @param {string} strPostalCode
 * @param {string} strLanguageId
 * @returns
 */
const createDefaultProfile = async (
  strUserOwnerId,
  strAbout,
  strProfilePicURL,
  strFullName,
  strHeadLine,
  strCountry,
  strPostalCode,
  strLanguageId
) => {
  const arrNames = strFullName.split(" ");
  const strFirstName = arrNames[0].length > 0 ? arrNames[0] : "Dwight";
  const strLastName =
    arrNames.length > 1 ? arrNames.slice(1).join(" ").trim() : "Schrute";

  return await createProfile(
    strUserOwnerId,
    true,
    [],
    strAbout,
    strProfilePicURL,
    strFirstName,
    strLastName,
    strHeadLine,
    strCountry,
    strPostalCode,
    strLanguageId
  );
};

/**
 *
 * @param {Object} objUserCredential
 * @param {string} strAuthMethod
 * @param {Object} dispatch
 * @param {NavigateFunction} objNavigate
 * @returns {Promise<void>}
 */
const handleAuthUserInfo = async (
  objUserCredential,
  strAuthMethod,
  dispatch,
  objNavigate
) => {
  const objUser = objUserCredential.user;

  if (isNewUser(objUserCredential)) {
    let strPhotoURL = "";
    if (objUser.photoURL && objUser.photoURL.length > 0) {
      strPhotoURL = objUser.photoURL;
    } else {
      strPhotoURL = await getDefaultProfilePicUrl();
    }

    const objCreatedUser = await createUser(
      objUser.uid,
      objUser.email ?? "",
      objUser.displayName ?? "Dwight Schrute",
      strAuthMethod,
      strPhotoURL
    );

    if (objCreatedUser) {
      const objProfile = await createDefaultProfile(
        objCreatedUser.strUserId,
        "",
        objCreatedUser.strProfilePicURL,
        objCreatedUser.strFullName,
        Constants.ProfileHeadLineEmptyName,
        Constants.ProfileCountryEmptyName,
        Constants.ProfilePostalCodeEmptyName,
        Constants.DefaultValueLanguageId
      );

      if (objProfile) {
        objCreatedUser.setProfile(objProfile);
        dispatch(setLoggedUser(objCreatedUser));
        objNavigate(NavigationPaths.FEED, { state: { loggedIn: true } });
      }
    }
  } else {
    handleExistingUser(objUser.uid, dispatch, objNavigate);
  }
};

/**
 * @param {Object} dispatch
 * @param {NavigateFunction} objNavigate
 * @returns {Promise<void>}
 */
const authenticateAnonymously = async (dispatch, objNavigate) => {
  const objUserCredential = await anonymousSignInUser();

  if (objUserCredential) {
    //We extract the anonymous user created in the DB.
    handleExistingUser(AnonymousUserData.strUserId, dispatch, objNavigate);
  }
};

/**
 * @param {Object} dispatch
 * @param {NavigateFunction} objNavigate
 * @returns {Promise<void>}
 */
const handleAsyncJoinGoogle = async (dispatch, objNavigate) => {
  //const { googleSignInUser } = await promiseServAuth;
  const objUserCredential = await googleSignInUser();
  if (objUserCredential) {
    handleAuthUserInfo(
      objUserCredential,
      AuthenticationMethods.FIREBASE_GOOGLE,
      dispatch,
      objNavigate
    );
  }
};

export { authenticateAnonymously, handleAsyncJoinGoogle };
