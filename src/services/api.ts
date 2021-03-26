import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params:{
    apiKey: process.env.REACT_API_KEY,
  }
});
