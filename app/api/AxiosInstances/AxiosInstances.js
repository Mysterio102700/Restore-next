import axios from 'axios';

const API_BASE_URL = "http://localhost:3000/api" || "https://restore-podiatry.vercel.app/api";
const TIMEOUT = 15000

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT
})