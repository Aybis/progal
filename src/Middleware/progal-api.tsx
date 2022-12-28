import axios from '../Configs/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // List Project Iniasi won for Manager
  inisiasiWon: () => axios.get('procurement/project/inisiasi-won'),
  disposisi: (data: Object) =>
    axios.post('procurement/project/disposition', data),

  // Project for PIC
  /**
   * Endpoint detail project beserta list mitra dan inisiasi
   * @param id project => model binding
   * @returns
   */
  detailProject: (params: Object) =>
    axios.get(`procurement/project/detail`, params),
  // document file => file_p6, file_p8, file_kl
  updateProject: (id: string, data: Object) =>
    axios.post(`procurement/project/update/${id}`, data),
  listProject: (data?: Object) =>
    axios.get('procurement/project/doesnt-have-mitra', data),

  /**
   * Endpoint untuk detail spesifik proejct mitra
   * @param id
   * @returns
   */
  detailProjectMitra: (params: Object) =>
    axios.get(`procurement/project-mitra/detail`, params),
  listProjectMitra: (data: Object) =>
    axios.get('procurement/project/has-mitra', data),
  listProjectMitraDone: (data: Object) =>
    axios.get('procurement/project-mitra/done', data),
  listProjectMonitorinng: (data: Object) =>
    axios.get('procurement/project-mitra/all', data),
  mappingMitra: (data: Object) => axios.post('procurement/project-mitra', data),
  updateMitra: (id: string, data: Object) =>
    axios.post(`procurement/project-mitra/update/${id}`, data),

  /**
   * Endpoint untuk list monitoring
   * berdasarkan PIC jika pic_id === null maka tarik semua data
   * @param pic_id
   * @returns
   */
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
  updateBoq: (id: string, data: Object) =>
    axios.post(`procurement/boq-item/update/${id}`, data),
  deleteBoq: (id: string) => axios.delete(`procurement/boq-item/delete/${id}`),
  // "project_mitra_id": 3
  listBoqByProject: (params: Object) =>
    axios.get('procurement/boq-item/by-project-mitra', params),

  //amandemen
  insertAmandemen: (data: Object) => axios.post('procurement/amandemen', data),
  // "id": 1
  detailAmandemenId: (params: Object) =>
    axios.get('procurement/amandemen/by-id', params),
  //"project_mitra_id": 3
  listAmandemenByMitra: (params: Object) =>
    axios.get('procurement/amandemen/by-project-mitra', params),
};
