import React, { Component } from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/postItems";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import DeleteIcon from "@material-ui/icons/Delete";
import {
	deletePost,
	likePost,
	unlikePost,
} from "../../redux/actions/postActions";
import { Link } from "react-router-dom";

class PostItems extends Component {
	likePost(postId) {
		this.props.likePost(postId);
	}
	unlikePost(postId) {
		this.props.unlikePost(postId);
	}
	deletePost(postId) {
		this.props.deletePost(postId);
	}
	render() {
		const { post, classes } = this.props;
		const { user } = this.props.auth;
		return (
			<div>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe">
								<img
									src={post.avatar}
									alt={post.name}
									className={classes.avatar}
								/>
							</Avatar>
						}
						title={post.name}
					/>

					<img className={classes.media} src={post.postImage} alt={post._id} />
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							{post.text}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton
							aria-label="like"
							onClick={this.likePost.bind(this, post._id)}
						>
							<ThumbUpIcon color="primary" />
						</IconButton>
						{post.likes.length}
						<IconButton
							aria-label="like"
							onClick={this.unlikePost.bind(this, post._id)}
						>
							<ThumbDownIcon color="primary" />
						</IconButton>

						<IconButton aria-label="comment">
							<Link to={`/post/${post._id}`} exact>
								<InsertCommentIcon color="primary" />
							</Link>
						</IconButton>
						{post.comments.length}
						{post.user === user.id ? (
							<IconButton
								aria-label="comment"
								onClick={this.deletePost.bind(this, post._id)}
							>
								<DeleteIcon color="primary" />
							</IconButton>
						) : null}
					</CardActions>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

const mapStateToAction = {
	deletePost,
	likePost,
	unlikePost,
};

export default connect(
	mapStateToProps,
	mapStateToAction
)(withStyles(styles)(PostItems));
