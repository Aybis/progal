import {
  ListProjectMitra,
  ListProjectMitraSelected,
  LIST_PROJECT_MITRA,
  LIST_PROJECT_MITRA_ERROR,
  LIST_PROJECT_MITRA_LOADING,
  LIST_PROJECT_MITRA_MESSAGE,
  LIST_PROJECT_MITRA_SELECTED,
} from '../Types/hasmitra';

interface InitialState {
  loading: boolean;
  listProjectMitra?: ListProjectMitra;
  selectedMitra?: ListProjectMitraSelected;
  isError: boolean;
  message?: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
};

const hasMitraReducer = (
  state: InitialState = initialState,
  action: any,
): InitialState => {
  switch (action.type) {
    case LIST_PROJECT_MITRA:
      return {
        ...state,
        loading: false,
        listProjectMitra: action.payload,
      };

    case LIST_PROJECT_MITRA_SELECTED:
      return {
        ...state,
        loading: false,
        selectedMitra: action.payload,
      };

    case LIST_PROJECT_MITRA_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
        message: action.payload,
      };

    case LIST_PROJECT_MITRA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case LIST_PROJECT_MITRA_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default hasMitraReducer;
