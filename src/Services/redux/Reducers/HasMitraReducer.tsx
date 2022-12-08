import {
  DataMitraHasProject,
  DataProjectHasMitra,
  LIST_MITRA_PIC,
  LIST_MITRA_PIC_SELECTED,
  LIST_PROJECT_MITRA,
  LIST_PROJECT_MITRA_ERROR,
  LIST_PROJECT_MITRA_LOADING,
  LIST_PROJECT_MITRA_MESSAGE,
  LIST_PROJECT_MITRA_SELECTED,
  LOADING_UPDATE_MITRA,
  ProjectMitraDispatchTypes,
} from '../Types/hasmitra';

interface InitialState {
  loading: boolean;
  listProjectMitra: DataProjectHasMitra[];
  selectedProjectMitra: DataProjectHasMitra;
  listMitraPic: DataMitraHasProject[];
  selectedMitraPic: DataMitraHasProject;
  isError: boolean;
  message?: string;
  loadingUpdateMitra?: boolean;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
  listProjectMitra: [],
  selectedProjectMitra: {} as DataProjectHasMitra,
  listMitraPic: [],
  selectedMitraPic: {} as DataMitraHasProject,
  loadingUpdateMitra: false,
};

const hasMitraReducer = (
  state: InitialState = initialState,
  action: ProjectMitraDispatchTypes,
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
        selectedProjectMitra: action.payload,
      };

    case LIST_PROJECT_MITRA_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
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

    case LIST_MITRA_PIC:
      return {
        ...state,
        listMitraPic: action.payload,
      };

    case LIST_MITRA_PIC_SELECTED:
      return {
        ...state,
        selectedMitraPic: action.payload,
      };

    case LOADING_UPDATE_MITRA:
      return {
        ...state,
        loadingUpdateMitra: action.payload,
      };

    default:
      return state;
  }
};

export default hasMitraReducer;
