import {
  DataInisiasi,
  InisiasiDispatchTypes,
  INISIASI_ERROR,
  INISIASI_LOADING,
  INISIASI_MESSAGE,
  INISIASI_SELECTED,
  LIST_INISIASI,
} from '../Types/inisiasi';

interface InitialState {
  loading: boolean;
  listInisiasi: DataInisiasi[];
  inisiasiSelected?: DataInisiasi;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
  listInisiasi: [],
};

export const inisiasiReduccer = (
  state: InitialState = initialState,
  action: InisiasiDispatchTypes,
): InitialState => {
  switch (action.type) {
    case LIST_INISIASI:
      return {
        ...state,
        loading: false,
        listInisiasi: action.payload,
      };

    case INISIASI_SELECTED:
      return {
        ...state,
        loading: false,
        inisiasiSelected: action.payload,
      };

    case INISIASI_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
      };

    case INISIASI_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case INISIASI_MESSAGE:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    default:
      return state;
  }
};
