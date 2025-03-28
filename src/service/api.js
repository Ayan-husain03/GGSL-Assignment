import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export const getUser = async (page = 1) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};
