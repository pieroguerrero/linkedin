import { getDefaultValues } from "../services/serviceDBValues";

const DatabaseValues = (() => {
  return getDefaultValues();
})();

export { DatabaseValues };
