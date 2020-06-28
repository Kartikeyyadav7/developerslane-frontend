import React, { Component } from "react";
import PostForm from "./PostForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";
import PostFeed from "./PostFeed";
import styles from "../../styles/post";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

class Posts extends Component {
	componentDidMount() {
		this.props.getPosts();
	}
	render() {
		let postContent;
		const { posts, loading } = this.props.post;
		const { classes } = this.props;
		if (posts === null || loading) {
			postContent = <CircularProgress />;
		} else {
			postContent = <PostFeed posts={posts} />;
		}

		return (
			<div>
				<PostForm />

				<Grid
					container
					direction="row"
					justify="center"
					spacing={6}
					className={classes.itemGrid}
				>
					{postContent}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(
	withStyles(styles)(Posts)
);
