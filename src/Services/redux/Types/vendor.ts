export const LIST_VENDOR = 'LIST_VENDOR';
export const VENDOR_LOADING = 'VENDOR_LOADING';
export const VENDOR_ERROR = 'VENDOR_ERROR';
export const VENDOR_SUCCESS = 'VENDOR_SUCCESS';
export const VENDOR_MESSAGE = 'VENDOR_MESSAGE';
export const VENDOR_SELECTED = 'VENDOR_SELECTED';

// type
export type Vendor = {
  akun_vendor?: string;
  alamat?: string;
  deskripsi_vendor?: string;
  direktur?: string;
  email?: string;
  fax?: string;
  id: number;
  jenis_vendor_id?: number;
  nama_vendor?: string;
  no_tlpn?: string;
  pic?: string;
};

// interface
export interface ListVendor {
  type: typeof LIST_VENDOR;
  payload: Vendor[];
}

export interface VendorLoading {
  type: typeof VENDOR_LOADING;
  payload: boolean;
}

export interface VendorError {
  type: typeof VENDOR_ERROR;
  payload: boolean;
}

export interface VendorSuccess {
  type: typeof VENDOR_SUCCESS;
  payload: boolean;
}

export interface VendorMessage {
  type: typeof VENDOR_MESSAGE;
  payload: string;
}

export interface VendorSelected {
  type: typeof VENDOR_SELECTED;
  payload: Vendor;
}

export type VendorDispatchTypes =
  | ListVendor
  | VendorLoading
  | VendorError
  | VendorSuccess
  | VendorMessage
  | VendorSelected;
