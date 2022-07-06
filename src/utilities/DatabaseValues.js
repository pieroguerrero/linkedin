import { getDefaultValues } from "../services/serviceDBValues";

const DatabaseValues = (() => {
  console.log("DatabaseValues function was called!");

  return getDefaultValues();
})();

export { DatabaseValues };
