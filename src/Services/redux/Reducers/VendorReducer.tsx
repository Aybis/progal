import {
  LIST_VENDOR,
  Vendor,
  VendorDispatchTypes,
  VENDOR_ERROR,
  VENDOR_LOADING,
  VENDOR_MESSAGE,
  VENDOR_SELECTED,
} from '../Types/vendor';

interface InitialState {
  loading: boolean;
  listVendor: Vendor[];
  selectedVendor: Vendor;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
  listVendor: [],
  selectedVendor: {} as Vendor,
};

const vendorReducer = (
  state: InitialState = initialState,
  action: VendorDispatchTypes,
): InitialState => {
  switch (action.type) {
    case VENDOR_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case LIST_VENDOR:
      return {
        ...state,
        loading: false,
        listVendor: action.payload,
      };

    case VENDOR_SELECTED:
      return {
        ...state,
        loading: false,
        selectedVendor: action.payload,
      };

    case VENDOR_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
      };

    case VENDOR_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default vendorReducer;
