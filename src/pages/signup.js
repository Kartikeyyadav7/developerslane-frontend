import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/signup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/authActions";

class signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: "",
			errors: {},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ errors: nextProps.errors });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let userDetails = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
		};

		// action
		this.props.registerUser(userDetails, this.props.history);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	render() {
		const {
			classes,
			// UI: { loading },
		} = this.props;
		const { errors } = this.state;
		return (
			<Paper elevation={3} className={classes.PaperItem}>
				<Typography
					variant="h5"
					align="right"
					display="block"
					style={{ margin: "0 auto" }}
				>
					{" "}
					SIGNUP{" "}
				</Typography>
				<form
					className={classes.formItems}
					noValidate
					onSubmit={this.handleSubmit}
				>
					<Typography variant="h6">Name</Typography>
					<TextField
						id="name"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						type="text"
						placeholder="Name"
						style={{ width: "15rem", marginBottom: "1rem" }}
					/>
					<Typography variant="h6">Email</Typography>
					<TextField
						id="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						type="email"
						placeholder="Email"
						helperText="Signup with gravatar account for your profile pic"
						style={{ width: "15rem", marginTop: "1rem" }}
					/>
					<Typography variant="h6" style={{ marginTop: "2rem" }}>
						Password
					</Typography>
					<TextField
						id="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						type="password"
						placeholder="Password"
						style={{ width: "15rem", marginTop: "1rem" }}
					/>
					{errors.errors && (
						<Typography variant="body2" className={classes.error}>
							{errors.errors}
						</Typography>
					)}
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.button}
					>
						signup
					</Button>
				</form>
				<Typography variant="body2" style={{ textAlign: "center" }}>
					Already have an account <Link to="/login">Login</Link>
				</Typography>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
	withStyles(styles)(signup)
);
