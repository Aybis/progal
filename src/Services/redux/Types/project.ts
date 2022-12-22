export const LIST_PROJECT = 'LIST_PROJECT';
export const PROJECT_LOADING = 'PROJECT_LOADING';
export const PROJECT_ERROR = 'PROJECT_ERROR';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_MESSAGE = 'PROJECT_MESSAGE';
export const PROJECT_SELECTED = 'PROJECT_SELECTED';
export const PROJECT_MITRA_SELECTED = 'PROJECT_MITRA_SELECTED';
export const FILTER_LIST_PROJECT = 'FILTER_LIST_PROJECT';

// type data
export type DataProject = {
  id: number | string;
  inisiasi_id: number;
  kl_dokumen: string;
  no_io: string;
  p6_dokumen: string;
  p8_dokumen: string;
  pic_legal: {
    id: number;
    name: string;
  };
  pic_procurement: {
    id: number;
    name: string;
  };
  inisiasi: {
    desc_project: string;
    end_customer: string;
    nilai_cogs: number | 0;
    nilai_kl: number;
    nilai_penawaran: number;
    nilai_project: number;
    no_insisasi: string;
    tgl_target_win: string;
    title_project: string;
    jasbisis: DataJasbis[];
  };
};

export type DataJasbis = {
  id: number;
  inisiasi_id: number;
  cogs: number | 0;
  indirect_cost: number;
  ebitda_project: number;
  ebitda_project_margin: number;
  revenue: number;
  metode_pembiayaan: string;
  status: string;
  dokumen: string;
  created_at: string;
  updated_at: string;
  dokumen_url: string;
};

export interface ListProject {
  type: typeof LIST_PROJECT;
  payload: DataProject[];
}

export interface FilterListProject {
  type: typeof FILTER_LIST_PROJECT;
  payload: DataProject[];
}

export interface ProjectLoading {
  type: typeof PROJECT_LOADING;
  payload: boolean;
}

export interface ProjectError {
  type: typeof PROJECT_ERROR;
}

export interface ProjectMessage {
  type: typeof PROJECT_MESSAGE;
  payload: string;
}

export interface ProjectSuccess {
  type: typeof PROJECT_SUCCESS;
  payload: boolean;
}

export interface ProjectSelected {
  type: typeof PROJECT_SELECTED;
  payload: DataProject;
}

export type ProjectDispatchTypes =
  | ListProject
  | FilterListProject
  | ProjectLoading
  | ProjectError
  | ProjectSuccess
  | ProjectMessage
  | ProjectSelected;
