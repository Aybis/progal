import { UserType } from '../Types/user';

const initialState = {
  user: null,
  session: '',
  success: false,
  error: false,
  message: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserType.USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserType.USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserType.USER_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case UserType.USER_SESSION:
      return {
        ...state,
        session: action.payload,
      };
    case UserType.USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
