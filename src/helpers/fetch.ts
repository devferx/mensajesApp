import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL || "localhost:3001/api";

export const fetchWithoutToken = axios.create({
  baseURL,
});
