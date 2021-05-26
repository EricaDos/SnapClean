import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//login the users
export const signin = (formData, history) => async (dispatch) => {
  try {

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};


// sign up in the user
export const signup = (formData, history) => async (dispatch) => {
  try {

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
