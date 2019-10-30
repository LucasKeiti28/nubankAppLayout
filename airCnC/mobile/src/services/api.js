import axios from "axios";

const api = axios.create({
  baseURL: "http://10.30.111.235:3333"
});

export default api;
