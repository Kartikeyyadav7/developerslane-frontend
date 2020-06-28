import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/login";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/postActions";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			file: "",
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectedFile = this.handleSelectedFile.bind(this);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ errors: nextProps.errors });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const { user } = this.props.auth;

		const data = new FormData();
		data.append("postImage", this.state.file);
		data.set("text", this.state.text);
		data.set("name", user.name);
		data.set("avatar", user.avatar);
		// call the action
		this.props.addPost(data);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSelectedFile(evt) {
		this.setState({
			file: evt.target.files[0],
		});
	}

	render() {
		const { classes } = this.props;
		const { errors } = this.state;
		return (
			<Paper
				elevation={3}
				className={classes.PaperItem}
				style={{ height: "20rem" }}
			>
				<Typography
					variant="h5"
					align="right"
					display="block"
					style={{ margin: "0 auto" }}
				>
					{" "}
					Create a post{" "}
				</Typography>
				<form
					className={classes.formItems}
					noValidate
					onSubmit={this.handleSubmit}
					style={{ margin: "2rem auto", height: "5rem" }}
				>
					<Typography variant="h6">Description</Typography>
					<TextField
						id="text"
						name="text"
						type="text"
						value={this.state.text}
						onChange={this.handleChange}
						multiline
						rows={2}
						placeholder="Text"
						style={{ width: "15rem" }}
					/>
					<Typography variant="h6">
						Image{" "}
						<Typography variant="body2">(size : 345px * 240px)</Typography>
					</Typography>
					<input
						type="file"
						onChange={this.handleSelectedFile}
						name="postImage"
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
						Post
					</Button>
				</form>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(
	withStyles(styles)(PostForm)
);
