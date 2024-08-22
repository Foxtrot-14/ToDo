import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
  timeout: 3000,
  headers: {},
});

export default instance;
