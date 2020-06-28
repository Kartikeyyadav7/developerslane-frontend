import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/login";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addComment } from "../../redux/actions/postActions";

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(evt) {
		evt.preventDefault();
		const { user } = this.props.auth;
		const { postId } = this.props;
		const newComment = {
			text: this.state.text,
			name: user.name,
			avatar: user.avatar,
		};
		// call the action
		this.props.addComment(postId, newComment);
		this.setState({ text: "" });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper
				elevation={3}
				className={classes.PaperItem}
				style={{ height: "18rem" }}
			>
				<Typography
					variant="h5"
					align="right"
					display="block"
					style={{ margin: "1rem", alignSelf: "flex-start" }}
				>
					{" "}
					Leave a review{" "}
				</Typography>
				<form
					className={classes.formItems}
					noValidate
					onSubmit={this.handleSubmit}
					style={{ alignSelf: "flex-start", margin: "1rem" }}
				>
					<Typography variant="h6">Comment</Typography>
					<TextField
						id="text"
						name="text"
						type="text"
						value={this.state.text}
						onChange={this.handleChange}
						multiline
						rows={2}
						style={{ width: "15rem" }}
					/>
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

export default connect(mapStateToProps, { addComment })(
	withStyles(styles)(CommentForm)
);
