import axios from 'axios';
import { getStoredAuthToken } from './authToken';

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:1337/';
const authToken = getStoredAuthToken();
const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    Authorization: authToken ? `Bearer ${authToken.jwt}` : '',
  },
});

export default api;
