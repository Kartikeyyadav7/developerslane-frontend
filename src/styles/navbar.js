const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	container: {
		maxWidth: "1100px",
		width: `100%`,
		margin: `0 auto`,
		padding: "0",
	},
	title: {
		flexGrow: 1,
		justifyContent: "inherit",
	},

	logout: {
		textDecoration: "none",
		textTransform: "uppercase",
		color: "white",
		fontSize: "14px",
		marginLeft: "12px",
		marginRight: "0.3rem",
	},
	img: {
		width: "3rem",
	},
	authItems: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		marginLeft: "0.7rem",
	},
	loggedUser: {
		display: "flex",
		alignItems: "center",
	},
});

export default styles;
