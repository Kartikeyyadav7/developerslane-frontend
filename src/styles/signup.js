const styles = (theme) => ({
	PaperItem: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		margin: "1rem auto",
		maxWidth: "1100px",
		height: "120vh",
	},
	formItems: {
		marginTop: "5rem",
		alignSelf: "center",
		width: "auto",
		marginLeft: "1rem",
	},
	error: {
		marginTop: "1rem",
		textAlign: "center",
		color: "red",
	},
	button: {
		position: "relative",
		margin: "2rem 0 2rem 4rem",
		width: "5rem",
		alignSelf: "center",
		display: "block",
	},
	loading: {
		position: "absolute",
	},
});
export default styles;
