import axios from '../Configs/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data: Object) => axios.post('auth/token/request', data),
  profile: () => axios.get('auth/token/detail'),
};
