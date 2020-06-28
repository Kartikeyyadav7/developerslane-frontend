import {
	GET_PROFILE,
	CLEAR_CURRENT_USER,
	PROFILE_LOADING,
	GET_ERRORS,
	SET_CURRENT_USER,
} from "../type";
import axios from "axios";

export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get("https://developers-lane.herokuapp.com/api/profile/")
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: {},
			})
		);
};

export const createProfile = (profileDetails, history) => (dispatch) => {
	axios
		.post("https://developers-lane.herokuapp.com/api/profile", profileDetails)
		.then((res) => history.push("/dashboard"))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const deleteAccount = () => (dispatch) => {
	axios
		.delete("https://developers-lane.herokuapp.com/api/profile")
		.then((res) =>
			dispatch({
				type: SET_CURRENT_USER,
				payload: {},
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const setProfileLoading = () => (dispatch) => {
	dispatch({
		type: PROFILE_LOADING,
	});
};

export const clearCurrentUser = () => (dispatch) => {
	dispatch({
		type: CLEAR_CURRENT_USER,
	});
};
