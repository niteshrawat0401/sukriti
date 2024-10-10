import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const loginApi = async (credentials) => {
  return await axios.post(`${API_URL}/signIn`, credentials);
};

export const signupApi = async (userDetails) => {
  return await axios.post(`${API_URL}/signUp`, userDetails);
};

export const getUserApi = async () => {
    return await axios.get(`${API_URL}/user/getStudent`);
  };
  
  export const updateUserApi = async (id, data) => {
    console.log(data)
    return await axios.put(`${API_URL}/user/editStudent/${id}`, data);
  };
  
  export const deleteUserApi = async (id) => {
    return await axios.delete(`${API_URL}/user/deleteStudent/${id}`);
  };
