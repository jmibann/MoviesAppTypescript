import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export const userId = '';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E4ZDg2NTNiZTg2ZTZmYjUxNDJiMmE5ZjQyNWUyMSIsInN1YiI6IjVmNzEyNzVjMWQ3OGYyMDAzMzY5YjQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYhJuY5y0LKz_pTOVE8pMoaIAE6c1I734CyzYSLiA9E';

const apiClient = axios.create({baseURL: BASE_URL});

apiClient.interceptors.request.use((config: any) => {
  config.headers.Authorization = 'Bearer ' + accessToken;
  return config;
});

const {get, post, put, delete: destroy} = apiClient;

export {get, post, put, destroy};
