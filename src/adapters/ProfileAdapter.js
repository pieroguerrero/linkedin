import { shapeProfile, shapeProfileIntro } from "../models";

const profileFromDataBase = (objRawProfile) => {
  try {
    const objProfileIntro = shapeProfileIntro(
      objRawProfile.objIntro.strFirstName,
      objRawProfile.objIntro.strLastName,
      objRawProfile.objIntro.strHeadline,
      objRawProfile.objIntro.strCountryLoc,
      objRawProfile.objIntro.strPostalCodeLoc
    );

    const objProfile = shapeProfile(
      objRawProfile.strProfileId,
      objRawProfile.booPrimary,
      objRawProfile.arrSections,
      objRawProfile.strAbout,
      objProfileIntro,
      objRawProfile.strProfilePicURL,
      objRawProfile.strBgPicPath,
      objRawProfile.dtCreatedOn.toDate(),
      objRawProfile.booActive,
      objRawProfile.strUserId
    );

    if (objProfile) {
      return objProfile;
    }
  } catch (error) {
    console.error("ProfileAdapter.profileFromDataBase:", error);
  }

  return null;
};

export { profileFromDataBase };
