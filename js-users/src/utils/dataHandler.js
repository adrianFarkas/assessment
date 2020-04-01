import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = () => {
  return axios
    .get(`${API_URL}/users.json`)
    .then(res => Promise.resolve(res.data));
};

export const updateUser = (id, data) => {
  return axios
    .put(`${API_URL}/users/${id}.json`, data)
    .catch(err => Promise.reject(err.response.data));
};
