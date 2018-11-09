import { hostUrl } from './config';


/**
 * make API request using provided endpoint
 *
 * @param {string} endpoint
 */
export const fetchData = (endpoint) => async () => {
  try {
    const response = await fetch(`${hostUrl}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
