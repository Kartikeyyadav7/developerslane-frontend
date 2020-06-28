import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
	root: {
		maxWidth: 500,
		width: "345px",
		marginRight: "1rem",
		marginTop: "1rem",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
});

class Posts extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<PostForm />
				<Card className={classes.root}>
					<CardHeader title={userHandle} subheader={createdAt} />
					<CardMedia className={classes.media} image={postImageUrl} />
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{body}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="like">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="comment">
							<InsertCommentIcon />
						</IconButton>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(Posts);
