import axios from "axios";

export const baseURL =
  import.meta.env.VITE_BASE_URL || "http://localhost:3001/api";

export const fetchWithoutToken = axios.create({
  baseURL,
});

export const fetchWithToken = axios.create({
  baseURL,
  headers: {
    "x-token": localStorage.getItem("token") || "",
  },
});
