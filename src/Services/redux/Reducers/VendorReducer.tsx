import {
  ListVendor,
  LIST_VENDOR,
  VendorSelected,
  VENDOR_ERROR,
  VENDOR_LOADING,
  VENDOR_MESSAGE,
  VENDOR_SELECTED,
} from '../Types/vendor';

interface InitialState {
  loading: boolean;
  listVendor?: ListVendor;
  selectedVendor?: VendorSelected;
  isError: boolean;
  message?: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
};

const vendorReducer = (
  state: InitialState = initialState,
  action: any,
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
        message: action.payload,
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
