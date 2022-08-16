import {
  composeNewProfileId,
  shapeProfile,
  shapeProfileIntro,
} from "../models";
import { CollectionNames } from "../utilities/Enums";
// eslint-disable-next-line no-unused-vars
import { Profile } from "../models";
import {
  createWithId,
  selectAll,
  selectCollectionGroup,
  where,
} from "./firestoreUtil";
import { profileFromDataBase } from "../adapters";

/**
 * @module ServiceProfile
 */

/**
 * @param {string} strUserOwnerId
 * @param {boolean} booPrimary - Indicates if this is the primary profile or not
 * @param {("education"|"skill"|"experience")[]} arrSections - Contains the list of section this Profile has configured with at least one register or document in the database.
 * @param {string} strAbout
 * @param {string} strProfilePicURL
 * @param {string} strBgPicPath
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
  strBgPicPath,
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
    strBgPicPath,
    new Date(),
    true,
    strUserOwnerId
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

/**
 *
 * @param {string} strOserOwnerId
 * @returns {Promise<Profile | null>}
 */
const getMainProfile = async (strOserOwnerId) => {
  const arrQueryConstraint = [
    where("booActive", "==", true),
    where("booPrimary", "==", true),
  ];
  const objRawProfile = await selectAll(
    arrQueryConstraint,
    CollectionNames.USERS,
    strOserOwnerId,
    CollectionNames.PROFILES
  );

  if (objRawProfile && objRawProfile.length === 1) {
    return profileFromDataBase(objRawProfile[0].data());
  }

  return null;
};

/**
 * Retreives the list of Active and Primary profiles that belong to certaing Users
 * @param {string[]} arrUserIds - Array of User Ids whose Profiles have to be retrived
 * @returns
 */
const getMainProfileAll = async (arrUserIds) => {
  const arrQueryConstraint = [
    where("booActive", "==", true),
    where("booPrimary", "==", true),
    where("strUserId", "in", arrUserIds),
  ];
  try {
    const arrQuerySnapDocs = await selectCollectionGroup(
      arrQueryConstraint,
      CollectionNames.PROFILES
    );

    if (arrQuerySnapDocs) {
      const arrProfiles = arrQuerySnapDocs.map((objRawProfile) => {
        const objProfile = profileFromDataBase(objRawProfile.data());
        if (objProfile) {
          return objProfile;
        }

        throw new Error(
          "serviceProfile.getMainProfileAll: objProfile cannot be null."
        );
      });

      return arrProfiles;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};

export { createProfile, getMainProfile, getMainProfileAll };
