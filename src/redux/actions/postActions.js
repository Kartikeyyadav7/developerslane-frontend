import {
	ADD_POST,
	GET_ERRORS,
	GET_POSTS,
	POST_LOADING,
	DELETE_POST,
	GET_POST,
} from "../type";
import axios from "axios";

export const addPost = (postData) => (dispatch) => {
	axios
		.post("https://developers-lane.herokuapp.com/api/post", postData)
		.then((res) => {
			dispatch({
				type: ADD_POST,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// add comment
export const addComment = (postId, commentData) => (dispatch) => {
	axios
		.put(
			`https://developers-lane.herokuapp.com/api/post/comment/${postId}`,
			commentData
		)
		.then((res) => {
			dispatch({
				type: GET_POST,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// delete comment
export const deleteComment = (postId, commentId) => (dispatch) => {
	axios
		.delete(
			`https://developers-lane.herokuapp.com/api/post/comment/${postId}/${commentId}`
		)
		.then((res) => {
			dispatch({
				type: GET_POST,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const getPosts = () => (dispatch) => {
	dispatch(setPostLoading());
	axios
		.get("https://developers-lane.herokuapp.com/api/post")
		.then((res) => {
			dispatch({
				type: GET_POSTS,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_POSTS,
				payload: null,
			})
		);
};

export const getPost = (id) => (dispatch) => {
	dispatch(setPostLoading());
	axios
		.get(`https://developers-lane.herokuapp.com/api/post/${id}`)
		.then((res) => {
			dispatch({
				type: GET_POST,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_POST,
				payload: null,
			})
		);
};

// delete post

export const deletePost = (id) => (dispatch) => {
	axios
		.delete(`https://developers-lane.herokuapp.com/api/post/${id}`)
		.then((res) => {
			dispatch({
				type: DELETE_POST,
				payload: id,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// like
export const likePost = (id) => (dispatch) => {
	axios
		.put(`https://developers-lane.herokuapp.com/api/post/like/${id}`)
		.then((res) => {
			dispatch(getPosts());
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const unlikePost = (id) => (dispatch) => {
	axios
		.post(`https://developers-lane.herokuapp.com/api/post/unlike/${id}`)
		.then((res) => {
			dispatch(getPosts());
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const setPostLoading = () => {
	return {
		type: POST_LOADING,
	};
};
