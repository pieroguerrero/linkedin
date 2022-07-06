import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { appStorage } from "../firebase";

/**
 * @typedef {Object} FileURLs
 * @property {string} strFileURL
 * @property {string} strStorageURi
 */

/**
 * Saves a file in the Firestorage and returns the public and the firestorages URLs in an object
 * @param {string} strFilePathDestination - Back slash separated string. e.g. "userId/messageId/filename.ext"
 * @param {Blob} objBlob
 * @returns {Promise<FileURLs | null>}
 */
const saveFile = async (strFilePathDestination, objBlob) => {
  try {
    const newImageRef = ref(appStorage, strFilePathDestination);
    const fileSnapshot = await uploadBytesResumable(newImageRef, objBlob);
    const publicImageUrl = await getDownloadURL(newImageRef);

    console.log("saveFile.publicImageUrl:", publicImageUrl);

    return {
      strFileURL: publicImageUrl,
      strStorageURi: fileSnapshot.metadata.fullPath,
    };
  } catch (error) {
    console.error("Firestorage.saveFile:", error);
    return null;
  }
};

export { saveFile };
