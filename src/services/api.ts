import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
});

export default api.defaults.params = {
  apiKey: process.env.REACT_APP_API_KEY,
};
