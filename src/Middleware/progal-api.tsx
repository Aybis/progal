import axios from '../Configs/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // List Project Iniasi won for Manager
  inisiasiWon: () => axios.get('procurement/project/inisiasi-won'),
  disposisi: (data: Object) =>
    axios.post('procurement/project/disposition', data),

  // Project for PIC
  detailProject: (params: Object) =>
    axios.get(`procurement/project/detail`, params),
  listProject: (data?: Object) =>
    axios.get('procurement/project/doesnt-have-mitra', data),
  // document file => file_p6, file_p8, file_kl
  updateProject: (id: string, data: Object) =>
    axios.post(`procurement/project/update/${id}`, data),
  listProjectMitra: (data: Object) =>
    axios.get('procurement/project/has-mitra', data),
  mappingMitra: (data: Object) => axios.post('procurement/project-mitra', data),
  updateMitra: (id: string, data: Object) =>
    axios.post(`procurement/project-mitra/update/${id}`, data),
  mitra: (params: Object) =>
    axios.get('procurement/project-mitra/by-pic', params),

  // File Pendukung
  insertSpph: (data: Object) => axios.post('procurement/spph', data),
  insertSph: (data: Object) => axios.post('procurement/sph', data),
  insertBakn: (data: Object) => axios.post('procurement/bakn', data),
  insertKontrak: (data: Object) => axios.post('procurement/kontrak', data),
  insertKhs: (data: Object) => axios.post('procurement/khs', data),
  insertAgreement: (data: Object) =>
    axios.post('procurement/persetujuan', data),
  insertRequest: (data: Object) => axios.post('procurement/permohonan', data),
  insertBast: (data: Object) => axios.post('procurement/bast', data),
  /* update requirement 13 - Desember -2022
   * split file BAST
   * upload file BAPP, DO, PR SAP, PO SAP, BAP, BAUT
   */
  insertBapp: (data: Object) => axios.post('procurement/bapp', data),
  insertBaut: (data: Object) => axios.post('procurement/baut', data),
  insertDo: (data: Object) => axios.post('procurement/do', data),
  insertPrSap: (data: Object) => axios.post('procurement/prsap', data),
  insertPoSap: (data: Object) => axios.post('procurement/posap', data),
  insertBaProgress: (data: Object) =>
    axios.post('procurement/ba-progress', data),

  // File Pendukung Update
  updateSpph: (id: string, data: Object) =>
    axios.post(`procurement/spph/update/${id}`, data),
  updateSph: (id: string, data: Object) =>
    axios.post(`procurement/sph/update/${id}`, data),
  updateBakn: (id: string, data: Object) =>
    axios.post(`procurement/bakn/update/${id}`, data),
  updateKontrak: (id: string, data: Object) =>
    axios.post(`procurement/kontrak/update/${id}`, data),
  updateKhs: (id: string, data: Object) =>
    axios.post(`procurement/khs/update/${id}`, data),
  updateAgreement: (id: string, data: Object) =>
    axios.post(`procurement/persetujuan/update/${id}`, data),
  updateRequest: (id: string, data: Object) =>
    axios.post(`procurement/permohonan/update/${id}`, data),
  updateBast: (id: string, data: Object) =>
    axios.post(`procurement/bast/update/${id}`, data),
  /* update requirement 13 - Desember -2022
   * split file BAST
   * upload file BAPP, DO, PR SAP, PO SAP, BAP
   */
  updateBapp: (id: string, data: Object) =>
    axios.post(`procurement/bapp/update/${id}`, data),
  updateBaut: (id: string, data: Object) =>
    axios.post(`procurement/baut/update/${id}`, data),
  updateBapProgress: (id: string, data: Object) =>
    axios.post(`procurement/ba-progress/update/${id}`, data),
  updateDo: (id: string, data: Object) =>
    axios.post(`procurement/do/update/${id}`, data),
  updatePrSap: (id: string, data: Object) =>
    axios.post(`procurement/prsap/update/${id}`, data),
  updatePoSap: (id: string, data: Object) =>
    axios.post(`procurement/posap/update/${id}`, data),

  // list vendor and item from master
  listMitra: () => axios.get('cms/vendor/get'),
  listItem: () => axios.get('cms/item/get'),

  // boq
  insertBoQ: (data: Object) => axios.post('procurement/boq-item', data),
};
