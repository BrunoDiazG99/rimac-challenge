import axios from "axios";

// Create axios instance with base configuration
export const httpClient = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for handling responses
httpClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("HTTP Client Error:", error);
    return Promise.reject(error);
  }
);
