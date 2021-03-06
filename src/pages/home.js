import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/home";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import creator_svg from "../images/mainpagesvg.svg";

class home extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}
	render() {
		const { classes } = this.props;

		return (
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				className={classes.mainGrid}
			>
				<Grid item xs={6} className={classes.textItem}>
					<div className="title">
						<Typography variant="h4"> DEVELOPERS LANE</Typography>
						<Typography
							variant="h5"
							style={{ paddingTop: "1.2rem", marginRight: "5rem" }}
						>
							A place where developers and designers share their work{" "}
						</Typography>
					</div>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						to="/signup"
						style={{ marginTop: "2rem" }}
					>
						Signup
					</Button>
				</Grid>
				<Grid item xs={6} className={classes.img}>
					<img src={creator_svg} className={classes.svg} alt="creator" />
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(withStyles(styles)(home));
