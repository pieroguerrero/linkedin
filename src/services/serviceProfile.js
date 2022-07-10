import {
  composeNewProfileId,
  shapeProfile,
  shapeProfileIntro,
} from "../models";
import { CollectionNames } from "../utilities/Enums";
// eslint-disable-next-line no-unused-vars
import { Profile } from "../models";
import { createWithId } from "./firestoreUtil";

/**
 * @module ServiceProfile
 */

/**
 * @param {string} strUserOwnerId
 * @param {boolean} booPrimary - Indicates if this is the primary profile or not
 * @param {("education"|"skill"|"experience")[]} arrSections - Contains the list of section this Profile has configured with at least one register or document in the database.
 * @param {string} strAbout
 * @param {string} strProfilePicURL
 * @param {string} strFirstName
 * @param {string} strLastName
 * @param {string} strHeadline
 * @param {string} strCountryLoc
 * @param {string} strPostalCodeLoc
 * @param {string} strLanguageId
 * @returns {Promise<Profile | null>}
 */
const createProfile = async (
  strUserOwnerId,
  booPrimary,
  arrSections,
  strAbout,
  strProfilePicURL,
  strFirstName,
  strLastName,
  strHeadline,
  strCountryLoc,
  strPostalCodeLoc,
  strLanguageId
) => {
  const objProfileIntro = shapeProfileIntro(
    strFirstName,
    strLastName,
    strHeadline,
    strCountryLoc,
    strPostalCodeLoc
  );

  const objProfile = shapeProfile(
    composeNewProfileId(strUserOwnerId, strLanguageId),
    booPrimary,
    arrSections,
    strAbout,
    objProfileIntro,
    strProfilePicURL,
    new Date(),
    true
  );

  if (
    await createWithId(
      objProfile,
      objProfile.strProfileId,
      CollectionNames.USERS,
      strUserOwnerId,
      CollectionNames.PROFILES
    )
  ) {
    return objProfile;
  } else {
    return null;
  }
};

export { createProfile };
