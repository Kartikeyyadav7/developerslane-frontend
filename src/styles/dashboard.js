const styles = (theme) => ({
	start: {
		margin: "2rem auto",
	},
	container: {
		maxWidth: "1100px",
		margin: "2rem auto",
	},
	dashboardContainer: {
		width: `100%`,
		flexGrow: 1,
		justifyContent: `center`,
		alignItems: `center`,
		[theme.breakpoints.down("xs")]: {
			flexDirection: "row",
		},
	},
	createProfile: {
		marginTop: "2rem",
		lineHeight: "1",
	},
	profileButton: {
		marginTop: "0.5rem",
		backgroundColor: "#3F51B5",
		color: "white",
		padding: "10px 15px",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
	},

	root: {
		width: "300px",
		margin: "2rem auto",
	},
	imageWrapper: {
		// textAlign: "center",
		// position: "relative",
		margin: "2rem",
	},
	profileImage: {
		width: "250px",
		height: "250px",
		margin: "auto",
		objectFit: "cover",
	},
	subroot: {
		// width: "35rem",
	},
	items: {
		display: "flex",
		margin: "2px",
		padding: "2px",
		alignItems: "center",
		justifyContent: "center",
	},
	skills: {
		display: "inline-flex",
		margin: "3px",
	},
	skillsContainer: {
		width: "10rem",
		margin: "1px auto",
		display: "flex",
	},
	socialIcons: {
		display: "flex",
		margin: "2px",
		padding: "2px",
		alignItems: "center",
		justifyContent: "center",
	},
	buttons: {
		display: "flex",
		margin: "2px",
		padding: "2px",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
