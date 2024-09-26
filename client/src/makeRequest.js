import axios from "axios";
export const makeRequest = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Authorization: "bearer",
        'Content-Type': "application/json",
    },
});