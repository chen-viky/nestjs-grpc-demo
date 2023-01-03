import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "/api/v1",
});
export const request = axiosInstance.request;
