// eslint-disable-next-line no-unused-vars
import { shapeDBDefaultValues, DefaultDatabaseValues } from "../models";
import { Constants } from "../utilities";
import { CollectionNames } from "../utilities/Enums";
import { selectById } from "./firestoreUtil";

/**
 * @module ServiceDatabaseValues
 */

/**
 *
 * @returns {Promise<DefaultDatabaseValues | null>}
 */
const getDefaultValues = async () => {
  try {
    const docDefaultValuesRaw = await selectById(
      Constants.DefaultValuesDocumentId,
      CollectionNames.DATABASE_VALUES
    );

    if (docDefaultValuesRaw) {
      return shapeDBDefaultValues(
        docDefaultValuesRaw.strDefaultPicProfileURL,
        docDefaultValuesRaw.strDefaultBgPicURL
      );
    }
  } catch (error) {
    console.error("serviceDBValues.getDefaultValues:", error);
  }

  return null;
};

export { getDefaultValues };
