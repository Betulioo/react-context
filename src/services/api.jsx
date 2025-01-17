import axios from "axios";

const API_URL = "https://668828a60bc7155dc01aa1d0.mockapi.io/app";

//funcion para obtener los menus
export const getMenus = async () => {
  const response = await axios.get(`${API_URL}/Menu`);
  return response.data;
};

//funcion para crear menus
export const createMenu = async (menu) => {
  const response = await axios.post(`${API_URL}/Menu`, menu);
  return response.data;
};

//funcion para obtener las comidas
export const getComidas = async () => {
  const response = await axios.get(`${API_URL}/comida`);
  return response.data;
};

//funcion para crear comidas
export const createComida = async (comida) => {
  const response = await axios.post(`${API_URL}/comida`, comida);
  return response.data;
};
