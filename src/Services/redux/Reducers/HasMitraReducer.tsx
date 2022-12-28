import {
  DataMitraHasProject,
  DataProjectHasMitra,
  LIST_MITRA_MONITORING,
  LIST_MITRA_MONITORING_FILTER,
  LIST_MITRA_MONITORING_LOADING,
  LIST_MITRA_PIC,
  LIST_MITRA_PIC_DONE,
  LIST_MITRA_PIC_DONE_LOADING,
  LIST_MITRA_PIC_FILTER,
  LIST_MITRA_PIC_FILTER_DONE,
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
  listMitraFilter: DataMitraHasProject[];
  listMitraFilterDone: DataMitraHasProject[];
  listMitraDone: DataMitraHasProject[];
  listMitraDoneLoading: boolean;
  listMonitoring: DataMitraHasProject[];
  listMonitoringLoading: boolean;
  listMonitoringFilter: DataMitraHasProject[];
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
  listMitraFilter: [],
  listMitraFilterDone: [],
  listMitraDone: [],
  listMitraDoneLoading: false,
  listMonitoring: [],
  listMonitoringLoading: false,
  listMonitoringFilter: [],
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

    case LIST_MITRA_PIC_FILTER:
      return {
        ...state,
        listMitraFilter: action.payload,
      };

    // mitra done
    case LIST_MITRA_PIC_DONE_LOADING:
      return {
        ...state,
        listMitraDoneLoading: action.payload,
      };

    case LIST_MITRA_PIC_FILTER_DONE:
      return {
        ...state,
        listMitraFilterDone: action.payload,
      };

    case LIST_MITRA_PIC_DONE:
      return {
        ...state,
        listMitraDone: action.payload,
      };

    // list monitoring
    case LIST_MITRA_MONITORING:
      return {
        ...state,
        listMonitoring: action.payload,
        listMonitoringLoading: false,
      };

    case LIST_MITRA_MONITORING_LOADING:
      return {
        ...state,
        listMonitoringLoading: action.payload,
      };

    case LIST_MITRA_MONITORING_FILTER:
      return {
        ...state,
        listMonitoringFilter: action.payload,
      };

    default:
      return state;
  }
};

export default hasMitraReducer;
