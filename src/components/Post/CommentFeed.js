import React, { Component } from "react";
import CommentItems from "./CommentItems";

class CommentFeed extends Component {
	render() {
		const { postId, comments } = this.props;
		return comments.map((comment) => (
			<CommentItems key={comment._id} comment={comment} postId={postId} />
		));
	}
}

export default CommentFeed;
