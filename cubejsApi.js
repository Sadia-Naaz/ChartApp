// src/cubejsApi.js
import cubejs from '@cubejs-client/core';

const CUBEJS_API_URL = 'http://localhost:4000/cubejs-api/v1'; // Cube.js API URL
const CUBEJS_TOKEN = '98f150d13848dab276e3e65717c023d0d6628e5c4c76ca1024608dce3dac83ad'; // Replace with your actual Cube.js API token

const cubejsApi = cubejs(CUBEJS_TOKEN, { apiUrl: CUBEJS_API_URL });

export default cubejsApi;
