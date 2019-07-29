import React from "react";
import PropTypes from "prop-types";

export class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: null,
			songId: this.props.songIdFromHome
		};
		this.audio = null;
	}

	render() {
		return (
			<div className="row player m-5">
				<div className="col-4 offset-4">
					<div className="row bg-dark">
						{this.state.toggle == "inPlay" ? (
							<div className="col text-white">
								<button
									onClick={() => {
										this.audio.play();
										this.setState({ toggle: "inPause" });
									}}>
									<i className="fas fa-play-circle fa-2x" />
								</button>
							</div>
						) : (
							<div className="col text-white">
								<button
									onClick={() => {
										this.audio.pause();
										this.setState({ toggle: "inPlay" });
									}}>
									<i className="fas fa-pause-circle fa-2x" />
								</button>
							</div>
						)}
					</div>
				</div>
				<audio
					id="audio"
					autoPlay="autoplay"
					type="audio/mp3"
					ref={t => (this.audio = t)}
					src={this.props.currentUrl}
					hidden="hidden"
				/>
			</div>
		);
	}
}
Player.propTypes = {
	currentUrl: PropTypes.string
};

// <div className="col text-white">
// 	<button onClick={() => this.audio.play()}>
// 		<i className="fas fa-play-circle fa-2x" />
// 	</button>
// </div>;

// fas fa-play-circle fa-2x
// fas fa-pause-circle fa-2x
// fas fa-arrow-alt-circle-right fa-2x
// fas fa-arrow-alt-circle-left fa-2x
