import {
  shapeDBDefaultValues,
  // eslint-disable-next-line no-unused-vars
  DefaultDatabaseValues,
} from "../models/DefaultValues";
import { CollectionNames, Constants } from "../utilities";
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
