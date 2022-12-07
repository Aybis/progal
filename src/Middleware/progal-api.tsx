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
  mitra: (params: Object) =>
    axios.get('procurement/project-mitra/by-pic', params),

  // File Pendukung
  insertSpph: (data: Object) => axios.post('procurement/spph', data),
  insertSph: (data: Object) => axios.post('procurement/sph', data),
  insertBakn: (data: Object) => axios.post('procurement/bakn', data),
  insertKontrak: (data: Object) => axios.post('procurement/kontrak', data),
  insertKhs: (data: Object) => axios.post('procurement/spph', data),
  insertAgreement: (data: Object) => axios.post('procurement/spph', data),
  insertRequest: (data: Object) => axios.post('procurement/spph', data),
};
