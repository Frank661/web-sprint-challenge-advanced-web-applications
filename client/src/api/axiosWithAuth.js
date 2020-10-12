import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    console.log("axiosWithAuth Token:", token);
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    })
}