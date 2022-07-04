import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  // eslint-disable-next-line no-unused-vars
  UserCredential,
} from "firebase/auth";

/**
 * @module serviceUserAuth
 */

/**
 *
 * @returns {Promise<UserCredential>}
 */
const signInUser = () => {
  var provider = new GoogleAuthProvider();
  return signInWithPopup(getAuth(), provider);
};

const signOutUser = () => {
  signOut(getAuth()).then(() => {
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
