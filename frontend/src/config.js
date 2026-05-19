// Determine API Base URL depending on environment
export const API_BASE_URL = import.meta.env.PROD 
  ? "https://atp-24eg105n50-week6.onrender.com" 
  : "http://localhost:3000";
