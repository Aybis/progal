import axios from 'axios';
import Swal from 'sweetalert2';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
});

// Add a response interceptor
// instance.interceptors.response.use((response) => response.data, errorHandler);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Swal.fire('Oopsie...', error.response.data.message, 'error');
    return Promise.reject(error);
  },
);
export { default as setHeader } from './header';

export default instance;
