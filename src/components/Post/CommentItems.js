import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../../styles/commentItems";
import withStyles from "@material-ui/core/styles/withStyles";
import { deleteComment } from "../../redux/actions/postActions";
import { connect } from "react-redux";

class CommentItems extends Component {
	deleteComment(postId, commentId) {
		this.props.deleteComment(postId, commentId);
	}
	render() {
		const { comment, postId, auth, classes } = this.props;
		return (
			<Card className={classes.root}>
				<CardMedia
					className={classes.cover}
					image={comment.avatar}
					title={comment.user}
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{comment.text}
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						{comment.user === auth.user.id ? (
							<IconButton
								aria-label="comment"
								onClick={this.deleteComment.bind(this, postId, comment._id)}
							>
								<DeleteIcon />
							</IconButton>
						) : null}
					</div>
				</div>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(
	withStyles(styles)(CommentItems)
);
