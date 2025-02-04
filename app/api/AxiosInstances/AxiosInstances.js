import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TIMEOUT = 15000;

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";


export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});
