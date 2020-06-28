import { GET_ERRORS, SET_CURRENT_USER } from "../type";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utilis/setAuthToken";

export const registerUser = (userData, history) => (dispatch) => {
	axios
		.post("https://developers-lane.herokuapp.com/api/user/register", userData)
		.then((res) => history.push("/login"))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const loginUser = (userData) => (dispatch) => {
	axios
		.post("https://developers-lane.herokuapp.com/api/user/login", userData)
		.then((res) => {
			const { token } = res.data;
			localStorage.setItem("token", token);
			setAuthToken(token);
			const decode = jwt_decode(token);
			dispatch(setUser(decode));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const setUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};

// logout user
export const logoutUser = () => (dispatch) => {
	// remove the token from localStorage
	localStorage.removeItem("token");
	// set auth header to false
	setAuthToken(false);
	// dispatch setUser with empty object
	dispatch(setUser({}));
};
