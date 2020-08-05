import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/navbar";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import { clearCurrentUser } from "../redux/actions/profileActions";
import Avatar from "@material-ui/core/Avatar";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout(e) {
		e.preventDefault();
		this.props.clearCurrentUser();
		this.props.logoutUser();
	}
	render() {
		const { isAuthenticated, user } = this.props.auth;
		const { classes } = this.props;
		const authLinks = (
			<AppBar position="static">
				<Toolbar className={classes.container}>
					<Button
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						<img src={logo} alt="logo" className={classes.img} />
					</Button>
					<div className={classes.authItems}>
						<Button color="inherit" component={Link} to="/dashboard">
							Profile
						</Button>
						<Button color="inherit" component={Link} to="/posts">
							Posts
						</Button>

						<Avatar
							alt={user.name}
							src={user.avatar}
							className={classes.avatar}
						/>
						<a
							href="/login"
							onClick={this.handleLogout}
							className={classes.logout}
						>
							LOGOUT
						</a>
					</div>
				</Toolbar>
			</AppBar>
		);

		const guestLinks = (
			<AppBar position="static">
				<Toolbar className={classes.container}>
					{" "}
					<Button
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						<img src={logo} alt="logo" className={classes.img} />
					</Button>
					<div>
						<Button color="inherit" component={Link} to="/login">
							Login
						</Button>
						<Button color="inherit" component={Link} to="/signup">
							signup
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		);

		return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentUser })(
	withStyles(styles)(Navbar)
);
