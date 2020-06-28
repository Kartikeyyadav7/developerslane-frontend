const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		marginRight: theme.spacing(85),
		marginLeft: theme.spacing(-5),
	},
	titleChange: {
		marginRight: theme.spacing(85),
		marginLeft: theme.spacing(-5),
	},
	logout: {
		textDecoration: "none",
		textTransform: "uppercase",
		color: "white",
		fontSize: "14px",
		marginLeft: "30px",
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		display: "flex",
		right: "-20px",
	},
	loggedUser: {
		display: "flex",
		alignItems: "center",
	},
	authLinks: {
		display: "flex",
	},
});

export default styles;
