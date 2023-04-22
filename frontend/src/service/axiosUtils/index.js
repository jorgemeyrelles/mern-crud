import axios from 'axios';

const { REACT_APP_API } = process.env;

// let BASE_URL = REACT_APP_API;

// const BASE_URL_LOCAL = 'http://localhost:3001/api/v1';

export const axiosInstance = axios.create({
  baseURL: REACT_APP_API,
  headers: {
    'Content-type': 'application/json',
  },
});