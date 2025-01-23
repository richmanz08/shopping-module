import axios from "axios";

export const clientJsonServerAPI = axios.create({
  baseURL: "http://localhost:5001/",
  headers: { Accept: "application/json" },
  responseType: "json",
});
