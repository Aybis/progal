import {
  User,
  UserSession,
  UserDispatchTypes,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
  USER_PROFILE,
} from './../Types/user';

interface InitialState {
  loading: boolean;
  session?: UserSession;
  profile?: User;
  isError: boolean;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  isError: false,
  message: '',
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
        message: 'Login success',
        session: action.payload,
      };

    case USER_PROFILE:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };

    case USER_ERROR:
      return {
        ...state,
        loading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default userReducer;
