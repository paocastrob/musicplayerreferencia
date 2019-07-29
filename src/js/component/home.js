import React from "react";
import { Songs } from "./songs";
import { Player } from "./player";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [],
			current: null
		};
	}

	componentDidMount() {
		// this.pauseBtn.style.display = "none";
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => resp.json())
			.then(songs => this.setState({ songs }));
	}

	songPlay = url => {
		// console.log("url", url);
		this.setState({
			current: "https://assets.breatheco.de/apis/sound/" + url
		});
	};

	// pipo() {
	// 	let i = 0;
	// 	let arr = [];
	// 	while (i < this.state.songs.length) {
	// 		arr.push(
	// 			<Songs
	// 				name={this.state.songs[i].name}
	// 				id={this.state.songs[i].id}
	// 				cat={this.state.songs[i].cat}
	// 			/>
	// 		);
	// 		i++;
	// 	}
	// 	return arr;
	// }

	render() {
		return (
			<div className="text-center mt-5">
				{this.state.songs.map((ez, ill) => {
					return (
						<Songs
							key={ill}
							name={this.state.songs[ill].name}
							id={this.state.songs[ill].id}
							cat={this.state.songs[ill].category}
							url={this.state.songs[ill].url}
							songPlay={() =>
								this.songPlay(this.state.songs[ill].url)
							}
						/>
					);
				})}

				<div className="fixed-bottom bg-secondary">
					<Player
						/*songIdFromHome={this.state.songs[i].id}*/ currentUrl={
							this.state.current
						}
					/>
				</div>
			</div>
		);
	}
}
// NOTA PARA EL BOTON FORWARD Y BACKWARD NECESITO QUE LA FUNCION SONG PLAY, META EN EL ESTADO EL ID, DEL SONIDO, TENGO QUE MANDARSELA EN EL URL AL PLAYER
// POR LO TANTO TENGO QUE VER SI SE LA TENGO QUE MANDAR A SONGS , YO CREO QUE SI, EN SONGS LA RECIBE, Y AL HACER CLICK EN PLAY SE LA MANDA AL PLAYER JUNTO CON EL
//URL, DESPUES EN EL PLAYER, YA ESTA AGARRANDOLA EN EL CONSTRUCTOR(PROPS), Y YA ESTA UNA VARIABLE SETEADA AHI
// EL SIGUIENTE PASO ES HACER LOS BOTONES FORWARD Y BACKWARD Y  onClick={() => this.play(this.state.currentIndex-1)}
// EN VEZ DEL CURRENT INDEX VA MI VARIABLE CON MI ID
