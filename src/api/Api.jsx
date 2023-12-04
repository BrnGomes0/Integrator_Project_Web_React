import axios from "axios";

const headers = {
    "Content-Type":"application/json",
}

const api = axios.create({
    urlPattern: 'http://10.109.71.4:8000//api/',
    headers: headers,
})
export default api;