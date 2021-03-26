import axios from 'axios';

const BASE_API_URL = `https://students-list-app-api.herokuapp.com`;
const API_TIMEOUT = 5000;

const apiRoute = {
  get: {
    students: `/students`
  },
  post: {
    student: `/student`
  },
  delete: {
    student: (studentId) => `/student/${studentId}`
  }
};

const createApi = () => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: API_TIMEOUT
  });
  const onSuccess = (response) => response;
  const onFail = (error) => {
    throw error;
  };
  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export {apiRoute};
export default createApi;
