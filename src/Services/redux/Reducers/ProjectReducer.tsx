import {
  DataProject,
  FILTER_LIST_PROJECT,
  LIST_PROJECT,
  PROJECT_ERROR,
  PROJECT_LOADING,
  PROJECT_MESSAGE,
  PROJECT_SELECTED,
} from '../Types/project';

interface InitialState {
  loading: boolean;
  listProject: DataProject[];
  selectedProject: DataProject;
  filterProject: DataProject[];
  isError: boolean;
  message?: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
  listProject: [],
  filterProject: [],
  selectedProject: {} as DataProject,
};

const projectReducer = (
  state: InitialState = initialState,
  action: any,
): InitialState => {
  switch (action.type) {
    case LIST_PROJECT:
      return {
        ...state,
        loading: false,
        listProject: action.payload,
      };

    case FILTER_LIST_PROJECT:
      return {
        ...state,
        loading: false,
        filterProject: action.payload,
      };

    case PROJECT_SELECTED:
      return {
        ...state,
        loading: false,
        selectedProject: action.payload,
      };

    case PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
        message: action.payload,
      };

    case PROJECT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case PROJECT_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
