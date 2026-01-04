import api from './api';

export const getCarts = async () => {
  try {
    const response = await api.get('/carts'); 
    return response.data; 
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};

