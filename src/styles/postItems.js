const styles = (theme) => ({
	root: {
		maxWidth: 500,
		width: "345px",
		marginRight: "1rem",
		marginTop: "1rem",
		[theme.breakpoints.down("xs")]: {
			marginRight: "0rem",

			width: "285px",
		},
	},
	media: {
		width: `345px`,
		maxWidth: "500px",
		maxHeight: "240px",
		objectFit: "cover",
	},
	avatar: {
		width: "25px",
		height: "25px",
		margin: "auto",
		objectFit: "cover",
	},
});

export default styles;
