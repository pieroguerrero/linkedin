/**
 *
 * @param {string} strFileURL
 * @param {Object} objFetchOptions
 * @returns {Promise<Blob | null>}
 */
const getBlobFile = async (strFileURL, objFetchOptions) => {
  try {
    const response = await fetch(strFileURL, objFetchOptions);
    if (response.ok) {
      const blod = await response.blob();
      return blod;
    }
    console.error("getBlobFile.noOk: ", response.status, response.statusText);
  } catch (error) {
    console.error("getBlobFile.catch: ", error);
  }
  return null;
};

export { getBlobFile };
