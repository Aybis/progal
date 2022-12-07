export const LIST_PROJECT = 'LIST_PROJECT';
export const PROJECT_LOADING = 'PROJECT_LOADING';
export const PROJECT_ERROR = 'PROJECT_ERROR';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_MESSAGE = 'PROJECT_MESSAGE';
export const PROJECT_SELECTED = 'PROJECT_SELECTED';
export const PROJECT_MITRA_SELECTED = 'PROJECT_MITRA_SELECTED';

// type data
export type Project = {
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
    nilai_cogs: number;
    nilai_kl: number;
    nilai_penawaran: number;
    nilai_project: number;
    no_insisasi: string;
    tgl_target_win: string;
  };
};

export interface ListProject {
  type: typeof LIST_PROJECT;
  payload: Project[];
}

export interface ProjectLoading {
  type: typeof PROJECT_LOADING;
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
  payload: Project;
}

export type ProjectDispatchTypes =
  | ProjectLoading
  | ProjectError
  | ProjectSuccess
  | ProjectMessage
  | ProjectSelected;