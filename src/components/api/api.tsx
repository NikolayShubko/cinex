import axios from "axios";

const baseURL = "https://onlyjar-production.up.railway.app/";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
