
// Import
import axios from "axios";

// URL

// 01310930/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;

