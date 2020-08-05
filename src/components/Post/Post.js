import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/postActions";
import PostItems from "../Posts/PostItems";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

class Post extends Component {
	componentDidMount() {
		this.props.getPost(this.props.match.params.id);
	}
	render() {
		const { post, loading } = this.props.post;
		let postContent;
		if (post === null || loading || Object.keys(post).length === 0) {
			postContent = <CircularProgress />;
		} else {
			postContent = (
				<div>
					<PostItems post={post} />
					<CommentForm postId={post._id} />
					<CommentFeed postId={post._id} comments={post.comments} />
				</div>
			);
		}

		return (
			<div style={{ margin: "2rem auto", maxWidth: "1100px" }}>
				{postContent}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
