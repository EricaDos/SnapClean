import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//login the users
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData); //action makes call to our api to access database
    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};


// sign up in the user
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData); //action makes call to our api to access database
    dispatch({ type: AUTH, data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
