import axios from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (token = null) => {
  // get data from localStorage use typescript
  const session: any = JSON.parse(localStorage.getItem('token') || '{}');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
