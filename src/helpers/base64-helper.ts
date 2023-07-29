// import { base64 } from "@secure-access-control/server";

import base64 from '@services/base64-service'
/**
 * Function which is used to convert base64 to JSON
 * @param { string } string
 * @returns
 */
const base64ToJson = (string: string) => {
  try {
    let decoded = base64.decode(string);
    return JSON.parse(decoded) || null;
  } catch (ex) {
    return null;
  }
};
/**
 * Function which is used to convert the json into base64 string
 * @param { JSON } json
 * @returns
 */
const jsonToBase64 = (json: any) => {
  return base64.encode(JSON.stringify(json));
};
const base64Helper = {
  base64ToJson,
  jsonToBase64,
};
export default base64Helper;
