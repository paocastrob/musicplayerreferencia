import React from "react";
import PropTypes from "prop-types";

export class Songs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="row m-2">
				<div className=" offset-2 col-8 bg-danger border-dark">
					<div className="row">
						<div className="col-2 text-white">{this.props.id}</div>
						<div className="col-8 text-white">
							{this.props.name}
						</div>
						<div className="col-1 text-white">
							{this.props.catz}
						</div>
						<div className="col-1">
							<a
								className="btn btn-dark text-white"
								onClick={() =>
									this.props.songPlay(this.props.url)
								}>
								PLAY
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Songs.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	cat: PropTypes.string,
	url: PropTypes.string,
	songPlay: PropTypes.func
};
