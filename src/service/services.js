import { axiosInstance } from "./axios.instance";

export const API_SERVICE = new axiosInstance(import.meta.env.VITE_API_BASE_URL);
