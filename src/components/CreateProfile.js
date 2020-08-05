import React, { Component } from "react";
import styles from "../styles/createProfile";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { createProfile } from "../redux/actions/profileActions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CreateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			handle: "",
			bio: "",
			location: "",
			website: "",
			twitter: "",
			facebook: "",
			linkedIn: "",
			company: "",
			instagram: "",
			youtube: "",
			skills: "",
			status: "",
			errors: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ errors: nextProps.errors });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let profileDetails = {
			handle: this.state.handle,
			bio: this.state.bio,
			website: this.state.website,
			location: this.state.location,
			twitter: this.state.twitter,
			instagram: this.state.instagram,
			linkedIn: this.state.linkedIn,
			facebook: this.state.facebook,
			company: this.state.company,
			youtube: this.state.youtube,
			skills: this.state.skills,
			status: this.state.status,
		};
		// call the action
		this.props.createProfile(profileDetails, this.props.history);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	render() {
		const { classes } = this.props;
		const { errors } = this.state;
		return (
			<Paper elevation={3} className={classes.PaperItem}>
				<div className={classes.profileContainer}>
					<Typography variant="h5"> CREATE PROFILE </Typography>
					<Typography variant="subtitle1">* required field</Typography>
					<form
						className={classes.formItems}
						noValidate
						onSubmit={this.handleSubmit}
					>
						<Typography variant="h6">* Handle</Typography>
						<TextField
							id="handle"
							name="handle"
							type="handle"
							value={this.state.handle}
							onChange={this.handleChange}
							placeholder="Handle"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Location
						</Typography>
						<TextField
							id="location"
							name="location"
							type="location"
							value={this.state.location}
							onChange={this.handleChange}
							placeholder="Location"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Website
						</Typography>
						<TextField
							id="website"
							name="website"
							type="website"
							value={this.state.website}
							onChange={this.handleChange}
							placeholder="Website"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Company
						</Typography>
						<TextField
							id="company"
							name="company"
							type="company"
							value={this.state.company}
							onChange={this.handleChange}
							placeholder="Company"
							style={{ width: "15rem" }}
						/>

						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							* Skills
						</Typography>
						<TextField
							id="skills"
							name="skills"
							type="skills"
							value={this.state.skills}
							onChange={this.handleChange}
							placeholder="Skills"
							helperText="Please provide skills separarted by ',' eg=html,css,js,react  "
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							* Status
						</Typography>
						<TextField
							id="status"
							name="status"
							type="status"
							value={this.state.status}
							onChange={this.handleChange}
							placeholder="Status"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Bio
						</Typography>
						<TextField
							id="bio"
							name="bio"
							type="bio"
							value={this.state.bio}
							onChange={this.handleChange}
							placeholder="Bio"
							variant="outlined"
							multiline
							rows={3}
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Twitter
						</Typography>
						<TextField
							id="twitter"
							name="twitter"
							type="twitter"
							value={this.state.twitter}
							onChange={this.handleChange}
							placeholder="Twitter"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Instagram
						</Typography>
						<TextField
							id="instagram"
							name="instagram"
							type="instagram"
							value={this.state.instagram}
							onChange={this.handleChange}
							placeholder="Instagram"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Youtube
						</Typography>
						<TextField
							id="youtube"
							name="youtube"
							type="youtube"
							value={this.state.youtube}
							onChange={this.handleChange}
							placeholder="Youtube"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							LinkedIn
						</Typography>
						<TextField
							id="linkedIn"
							name="linkedIn"
							type="linkedIn"
							value={this.state.linkedIn}
							onChange={this.handleChange}
							placeholder="LinkedIn"
							style={{ width: "15rem" }}
						/>
						<Typography variant="h6" style={{ marginTop: "2rem" }}>
							Facebook
						</Typography>
						<TextField
							id="facebook"
							name="facebook"
							type="facebook"
							value={this.state.facebook}
							onChange={this.handleChange}
							placeholder="Facebook"
							style={{ width: "15rem" }}
						/>

						{errors.errors && (
							<Typography variant="body2" className={classes.error}>
								{errors.errors}
							</Typography>
						)}
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.button}
						>
							Submit
						</Button>
					</form>
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(
	withStyles(styles)(CreateProfile)
);
