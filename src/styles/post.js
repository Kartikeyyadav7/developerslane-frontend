const styles = (theme) => ({
	itemGrid: {
		display: "flex",
		maxWidth: "1100px",
		margin: "auto",
		flexWrap: "wrap",
		alignContent: "flexStart",
		[theme.breakpoints.down("sm")]: {
			width: "0",
		},
	},
});

export default styles;
