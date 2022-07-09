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

/**
 * Analyzes the profile picture url provided, if it contains data then i will store if in the firestorage, if not it will store a defatul picture. Returns the public URL of the recently saved picture.
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
      dispatch(setLoggedUser(objCreatedUser));
      objNavigate(NavigationPaths.FEED, { state: { loggedIn: true } });
    }
  } else {
    const objExistingUser = await getUser(objUser.uid);
    if (objExistingUser) {
      dispatch(setLoggedUser(objExistingUser));
      objNavigate(NavigationPaths.FEED, { state: { loggedIn: true } });
    }
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
    handleAuthUserInfo(
      objUserCredential,
      AuthenticationMethods.FIREBASE_ANONYMOUS,
      dispatch,
      objNavigate
    );
  }
};

/**
 * @param {Object} dispatch
 * @param {NavigateFunction} objNavigate
 * @returns {Promise<void>}
 */
const handleAsyncJoinGoogle = async (dispatch, objNavigate) => {
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
