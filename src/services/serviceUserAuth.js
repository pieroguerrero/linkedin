import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
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
const signInUser = async () => {
  try {
    var provider = new GoogleAuthProvider();
    return await signInWithPopup(appAuthProvider, provider);
  } catch (error) {
    console.error("signInUser", error);
    return null;
  }
};

const signOutUser = () => {
  signOut(appAuthProvider).then(() => {
    //todo something to reaload the page and show default values
    console.log("signed out!!!");
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

export { signInUser, signOutUser, isNewUser };
