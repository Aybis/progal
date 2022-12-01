import axios from '../Configs/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  inisiasiWon: () => axios.get('procurement/project/inisiasi-won'),
  listProject: (data: Object) =>
    axios.get('procurement/project/doesnt-have-mitra', data),
  listProjectMitra: (data: Object) =>
    axios.get('procurement/project/has-mitra', data),
  disposisi: (data: Object) =>
    axios.post('procurement/project/disposition', data),
  mappingMitra: (data: Object) => axios.post('procurement/project-mitra', data),
  updateMitra: (id: string, data: Object) =>
    axios.put(`procurement/project-mitra/update/${id}`, data),
  listMitra: () => axios.get('cms/vendor/get'),
};
