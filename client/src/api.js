import axios from "axios";

const API = axios.create({
  baseURL: "https://hey-buddy-86by.onrender.com/api",
});

export default API;