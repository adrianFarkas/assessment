import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = () => {
  return axios
    .get(`${API_URL}/users.json`)
    .then(res => Promise.resolve(res.data));
};

export const getUser = id => {
  return axios
    .get(`${API_URL}/users/${id}.json`)
    .then(res => Promise.resolve(res.data));
};

export const updateUser = (id, data) => {
  return axios
    .put(`${API_URL}/users/${id}.json`, data)
    .catch(err => Promise.reject(err.response.data));
};

export const addNewUser = data => {
  return axios
    .post(`${API_URL}/users.json`, data)
    .catch(err => Promise.reject(err.response.data));
};
