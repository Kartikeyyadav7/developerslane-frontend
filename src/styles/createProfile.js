const styles = (theme) => ({
	PaperItem: {
		margin: "1rem auto",
		maxWidth: "1100px",
		height: "250vh",
	},
	profileContainer: {
		width: `40%`,
		margin: `0 auto`,
		[theme.breakpoints.down("xs")]: {
			width: `80%`,
		},
	},
	formItems: {
		marginTop: "1rem",
		alignSelf: "center",
		width: "13rem",
	},
	error: {
		marginTop: "1rem",
		textAlign: "center",
		color: "red",
		fontSize: "0.8rem",
	},
	button: {
		position: "relative",
		margin: "2rem 0 2rem 4rem",
		width: "5rem",
		alignSelf: "center",
	},
});
export default styles;
