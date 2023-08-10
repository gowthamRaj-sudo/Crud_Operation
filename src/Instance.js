import axios from "axios";
export const baseUrl = "http://127.0.0.1:5000";
export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
