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
		width: "12rem",
	},
	error: {
		marginTop: "1rem",
		textAlign: "center",
		color: "red",
	},
	button: {
		position: "relative",
		marginTop: "2rem",
		width: "5rem",
		alignSelf: "center",
	},
	loading: {
		position: "absolute",
	},
});
export default styles;
