export const LIST_VENDOR = 'LIST_VENDOR';
export const VENDOR_LOADING = 'VENDOR_LOADING';
export const VENDOR_ERROR = 'VENDOR_ERROR';
export const VENDOR_SUCCESS = 'VENDOR_SUCCESS';
export const VENDOR_MESSAGE = 'VENDOR_MESSAGE';
export const VENDOR_SELECTED = 'VENDOR_SELECTED';

// type
export type Vendor = {
  alamat?: string | null;
  deskripsi_vendor?: string | null;
  direktur?: string | null;
  email?: string | null;
  id?: string | number;
  jenis_vendor_id?: number | string;
  nama_vendor?: string;
  no_tlpn?: string | null;
  pic?: string | null;
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
