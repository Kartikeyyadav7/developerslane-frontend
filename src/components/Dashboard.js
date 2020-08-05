import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../styles/dashboard";
import withStyles from "@material-ui/core/styles/withStyles";
import {
	getCurrentProfile,
	deleteAccount,
} from "../redux/actions/profileActions";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import isEmpty from "../utilis/is-empty";
import LinkIcon from "@material-ui/icons/Link";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SettingsIcon from "@material-ui/icons/Settings";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
	}
	handleDelete() {
		this.props.deleteAccount();
	}

	render() {
		const { profile, loading } = this.props.profile;
		const {
			user: { avatar, name },
		} = this.props.auth;

		const { classes } = this.props;
		let dashboardComponent;

		if (profile === null || loading) {
			dashboardComponent = <CircularProgress color="secondary" />;
		} else {
			//check that is profile and empty object or filled
			if (Object.keys(profile).length > 0) {
				dashboardComponent = (
					<div>
						<Typography variant="body1">
							Welcome , <Link to={`/profile/${profile.handle}`}>{name}</Link>
						</Typography>
						<Paper className={classes.start}>
							<Grid container className={classes.dashboardContainer}>
								<Grid item /*max-width: 50%;*/>
									<div className={classes.imageWrapper}>
										<img
											src={avatar}
											alt={name}
											className={classes.profileImage}
										/>
									</div>
								</Grid>
								<Grid item>
									<div className={classes.subroot}>
										<Typography
											variant="body2"
											style={{ textAlign: "center", fontSize: "2rem" }}
										>
											{profile.handle}
										</Typography>
										{isEmpty(profile.website) ? null : (
											<div className={classes.items}>
												<LinkIcon color="primary" />
												<Typography
													variant="body2"
													style={{ textAlign: "center" }}
												>
													{profile.website}
												</Typography>
												<Divider variant="middle" />
											</div>
										)}
										{isEmpty(profile.location) ? null : (
											<div className={classes.items}>
												<LocationOnIcon color="primary" />
												<Typography
													variant="body2"
													style={{ textAlign: "center" }}
												>
													{profile.location}
												</Typography>
												<Divider variant="middle" />
											</div>
										)}
										{isEmpty(profile.company) ? null : (
											<div className={classes.items}>
												<BusinessIcon color="primary" />
												<Typography
													variant="body2"
													style={{ textAlign: "center" }}
												>
													{profile.company}
												</Typography>
												<Divider variant="middle" />
											</div>
										)}
										{isEmpty(profile.skills) ? null : (
											<div className={classes.skillsContainer}>
												<SettingsIcon color="primary" />
												{profile.skills.map((skill) => (
													<div className={classes.skills}>
														<Typography
															variant="body2"
															style={{ textAlign: "center" }}
														>
															{skill}
														</Typography>
													</div>
												))}
											</div>
										)}
										{isEmpty(profile.status) ? null : (
											<div className={classes.items}>
												<WorkIcon color="primary" />
												<Typography
													variant="body2"
													style={{ textAlign: "center" }}
												>
													{profile.status}
												</Typography>
												<Divider variant="middle" />
											</div>
										)}
										{isEmpty(profile.bio) ? null : (
											<div className={classes.items}>
												<EmojiPeopleIcon color="primary" />
												<Typography
													variant="body2"
													style={{ textAlign: "center" }}
												>
													{profile.bio}
												</Typography>
												<Divider variant="middle" />
											</div>
										)}
										<Grid item xs={12} className={classes.socialIcons}>
											{isEmpty(
												profile.social && profile.social.twitter
											) ? null : (
												<div>
													<a
														href={profile.social.twitter}
														target="_blank"
														rel="noopener noreferrer"
													>
														<TwitterIcon style={{ margin: " 0.5rem" }} />
													</a>
												</div>
											)}
											{isEmpty(
												profile.social && profile.social.instagram
											) ? null : (
												<div>
													<a
														href={profile.social.instagram}
														target="_blank"
														rel="noopener noreferrer"
													>
														<InstagramIcon style={{ margin: " 0.5rem" }} />
													</a>
												</div>
											)}
											{isEmpty(
												profile.social && profile.social.facebook
											) ? null : (
												<div>
													<a
														href={profile.social.facebook}
														target="_blank"
														rel="noopener noreferrer"
													>
														<FacebookIcon style={{ margin: " 0.5rem" }} />
													</a>
												</div>
											)}
											{isEmpty(
												profile.social && profile.social.linkedIn
											) ? null : (
												<div>
													<a
														href={profile.social.linkedIn}
														target="_blank"
														rel="noopener noreferrer"
													>
														<LinkedInIcon style={{ margin: " 0.5rem" }} />
													</a>
												</div>
											)}
											{isEmpty(
												profile.social && profile.social.youtube
											) ? null : (
												<div>
													<a
														href={profile.social.youtube}
														target="_blank"
														rel="noopener noreferrer"
													>
														<YouTubeIcon style={{ margin: " 0.5rem" }} />
													</a>
												</div>
											)}
										</Grid>
										<div className={classes.buttons}>
											<Button
												component={Link}
												to="/edit-profile"
												color="primary"
											>
												Edit profile
											</Button>
											<Button
												onClick={this.handleDelete.bind(this)}
												style={{ background: "red", color: "white" }}
											>
												Delete my account
											</Button>
										</div>
									</div>
								</Grid>
							</Grid>
						</Paper>
					</div>
				);
			} else {
				dashboardComponent = (
					<div className={classes.createProfile}>
						<Typography variant="body1">Welcome , {name}</Typography>
						<Typography variant="body1">
							Hey , it seems you are new here please create your profile
						</Typography>
						<Link to="/create-profile" className={classes.profileButton}>
							Create Profile
						</Link>
					</div>
				);
			}
		}

		return (
			<div className={classes.container}>
				<Typography variant="h5">Dashboard</Typography>
				{dashboardComponent}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	withStyles(styles)(Dashboard)
);
