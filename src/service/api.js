import axios from "axios";

const BASE_URL = "https://reqres.in/api";

// ?this is base url

const api = axios.create({
  baseURL: BASE_URL,
});

//  this function is for login the user
export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};


// this function is for getting the user data
export const getUser = async (page = 1) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
}

// this function is for delete the user
export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data
}


// this function is for edit the user details

export const editUser = async (id, userData) => {
  const response  = await api.put(`/users/${id}`, userData)
  return response.data
}



export default api;