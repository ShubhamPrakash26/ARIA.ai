import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:3000/api"
    : "https://aria-ai-backend.vercel.app/api");

const API = axios.create({
  baseURL: apiBaseUrl,
});

// Auto-attach JWT token from localStorage to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;