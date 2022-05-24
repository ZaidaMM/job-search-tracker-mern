import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  // REGISTER_USER_BEGIN,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_ERROR,
  // LOGIN_USER_BEGIN,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
} from './actions';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  // if (action.type === REGISTER_USER_BEGIN) {
  //   return { ...state, isLoading: true };
  // }

  // if (action.type === REGISTER_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.userLocation,
  //     jobLocation: action.payload.jobLocation,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'success',
  //     alertText: 'User created! Redirecting...',
  //   };
  // }

  // if (action.type === REGISTER_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'danger',
  //     alertText: action.payload.msg,
  //   };
  // }

  // if (action.type === LOGIN_USER_BEGIN) {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === LOGIN_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.userLocation,
  //     jobLocation: action.payload.jobLocation,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'success',
  //     alertText: 'Login successful! Redirecting...',
  //   };
  // }

  // if (action.type === LOGIN_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'danger',
  //     alertText: action.payload.msg,
  //   };
  // }

  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
