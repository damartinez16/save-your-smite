import sendRequest from './send-request';

const BASE_URL = '/api/builds';

export function getAll() {
  return sendRequest(BASE_URL);
}

// Retrieve an unpaid order for the logged in user
export function getBuild() {
  return sendRequest(`${BASE_URL}/build`);
}


export function addItemToBuild(itemId) {
  return sendRequest(`${BASE_URL}/build/items/${itemId}`, 'POST');
}

export function saveBuild() {
    return sendRequest(`${BASE_URL}/build/saveBuild`, 'POST');
}