import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import ProtectedRoute from "./utilis/ProtectedRoutes";
//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
//Components
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateProfile from "./components/CreateProfile";
import EditProfile from "./components/EditProfile";
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Posts/PostForm";
import Post from "./components/Post/Post";
//Redux
import store from "./redux/store";
import { Provider } from "react-redux";
import { setUser } from "./redux/actions/authActions";
import setAuthToken from "./utilis/setAuthToken";
import { clearCurrentUser } from "./redux/actions/profileActions";
import { logoutUser } from "./redux/actions/authActions";

if (localStorage.token) {
	const decoded = jwt_decode(localStorage.token);
	setAuthToken(localStorage.token);
	store.dispatch(setUser(decoded));
	// check if token is expired
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// logout user
		store.dispatch(logoutUser());
		//clear the profile
		store.dispatch(clearCurrentUser());

		// redirect to login
		window.location.href = "/login";
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<ProtectedRoute exact path="/dashboard" component={Dashboard} />
						<ProtectedRoute
							exact
							path="/create-profile"
							component={CreateProfile}
						/>
						<ProtectedRoute
							exact
							path="/edit-profile"
							component={EditProfile}
						/>
						<ProtectedRoute exact path="/posts" component={Posts} />
						<ProtectedRoute exact path="/postform" component={PostForm} />
						<ProtectedRoute exact path="/post/:id" component={Post} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
