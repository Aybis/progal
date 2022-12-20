import axios from '../Configs/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (data: Object) => axios.post('auth/token/request', data),
  profile: () => axios.get('auth/token/detail'),
  listMenu: (params?: Object) => axios.get('procurement/menu', params),
  userProcurement: () => axios.get('cms/user/get/user-procurment'),
  userLegal: () => axios.get('cms/user/get/user-legal'),
  listVendor: () => axios.get('cms/jenisvendor/get'),
};
