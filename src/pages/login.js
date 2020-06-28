import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/login";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
		this.setState({ errors: nextProps.errors });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let userDetails = {
			email: this.state.email,
			password: this.state.password,
		};
		// call the action
		this.props.loginUser(userDetails);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	render() {
		const { classes } = this.props;
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
					LOGIN{" "}
				</Typography>
				<form
					className={classes.formItems}
					noValidate
					onSubmit={this.handleSubmit}
				>
					<Typography variant="h6">Email</Typography>
					<TextField
						id="email"
						name="email"
						type="email"
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="Email"
						style={{ width: "15rem" }}
					/>
					<Typography variant="h6" style={{ marginTop: "2rem" }}>
						Password
					</Typography>
					<TextField
						id="password"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange}
						placeholder="Password"
						style={{ width: "15rem" }}
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
						Login
					</Button>
				</form>
				<Typography variant="body2" style={{ textAlign: "center" }}>
					Don't have an account <Link to="/signup">Signup</Link>
				</Typography>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(
	withStyles(styles)(login)
);
