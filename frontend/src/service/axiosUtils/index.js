import axios from 'axios';

const { REACT_APP_API } = process.env;

let BASE_URL = REACT_APP_API;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});