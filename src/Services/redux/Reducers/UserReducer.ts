import {
  User,
  UserDispatchTypes,
  UserSession,
  USER_ERROR,
  USER_LOADING,
  USER_MENU,
  USER_MESSAGE,
  USER_PROFILE,
  USER_SUCCESS,
  UserProcurementPic,
  UserLegalPic,
  USER_PROCUREMENT,
  USER_LEGAL,
} from './../Types/user';

interface InitialState {
  loading: boolean;
  session?: UserSession;
  profile?: User;
  procurement: UserProcurementPic[];
  legal: UserLegalPic[];
  isError: boolean;
  message?: string;
  menu?: any;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
  procurement: [],
  legal: [],
  profile: {} as User,
  session: {} as UserSession,
  menu: [],
};

const userReducer = (
  state: InitialState = initialState,
  action: UserDispatchTypes,
): InitialState => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        session: action.payload,
      };

    case USER_PROFILE:
      return {
        ...state,
        loading: false,
        isError: false,
        profile: action.payload,
      };

    case USER_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
      };

    case USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case USER_MENU:
      return {
        ...state,
        loading: false,
        isError: false,
        menu: action.payload,
      };

    case USER_PROCUREMENT:
      return {
        ...state,
        loading: false,
        isError: false,
        procurement: action.payload,
      };

    case USER_LEGAL:
      return {
        ...state,
        loading: false,
        isError: false,
        legal: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
