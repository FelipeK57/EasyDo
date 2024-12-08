import axios from "axios";

const route = "http://localhost:3000";

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${route}/register/`, {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${route}/login/`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};
