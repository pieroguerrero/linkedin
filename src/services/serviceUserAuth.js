import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  signInAnonymously,
  // eslint-disable-next-line no-unused-vars
  UserCredential,
} from "firebase/auth";
import { appAuthProvider } from "../firebase";

/**
 * @module serviceUserAuth
 */

/**
 *
 * @returns {Promise<UserCredential | null>}
 */
const googleSignInUser = async () => {
  try {
    var provider = new GoogleAuthProvider();
    return await signInWithPopup(appAuthProvider, provider);
  } catch (error) {
    console.error("googleSignInUser", error);
    return null;
  }
};

const googleSignOutUser = () => {
  signOut(appAuthProvider).then(() => {
    //todo something to reaload the page and show default values
    console.log("googleSignOutUser out!!!");
  });
};

/**
 *
 * @param {UserCredential} objUserCrential
 * @returns {(boolean | null)}
 */
const isNewUser = (objUserCrential) => {
  const objAdditionalInfo = getAdditionalUserInfo(objUserCrential);
  return objAdditionalInfo ? objAdditionalInfo.isNewUser : null;
};

/**
 *
 * @returns {Promise<UserCredential | null>}
 */
const anonymousSignInUser = async () => {
  try {
    return await signInAnonymously(appAuthProvider);
  } catch (error) {
    console.error("anonymousSignIn:", error);
    return null;
  }
};

export { googleSignInUser, googleSignOutUser, isNewUser, anonymousSignInUser };
