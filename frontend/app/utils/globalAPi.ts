import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const baseURL = 'http://localhost:1337/api';

const apiClient = axios.create({baseURL, headers: {Authorization: `demo ${apiKey}`}});

export const getLatestProduct = () => apiClient.get('/products?populate=*');