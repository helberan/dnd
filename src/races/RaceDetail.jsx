import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../Loader";
import dragonborn from "./races-images/dragonborn.png";
import dwarf from "./races-images/dwarf.png";
import elf from "./races-images/elf.png";
import gnome from "./races-images/gnome.png";
import halfElf from "./races-images/half-elf.png";
import halfOrc from "./races-images/half-orc.png";
import halfling from "./races-images/halfling.png";
import human from "./races-images/human.png";
import tiefling from "./races-images/tiefling.png";

export const RaceDetail = () => {
	const { id } = useParams();
	const [data, setData] = useState();
	const racesImages = {
		dragonborn,
		dwarf,
		elf,
		gnome,
		"half-elf": halfElf,
		"half-orc": halfOrc,
		halfling,
		human,
		tiefling,
	};

	const findImage = (iteratedRace) => {
		if (iteratedRace === "half-elf") {
			return racesImages["half-elf"];
		} else if (iteratedRace === "half-orc") {
			return racesImages["half-orc"];
		} else {
			return racesImages[iteratedRace];
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://www.dnd5eapi.co/api/races/${id}`).then((res) => res.json());
			setData(await response);
			console.log(await response);
		};

		fetchData();
	}, [id]);

	return (
		<div>
			{data === undefined ? (
				<Loader />
			) : (
				<div className="Detail">
					<div className="DetailUpperHalf">
						<section>
							<h1>{data.name}</h1>
							<h3>Alignment</h3>
							<p>{data.alignment}</p>
							<h3>Age</h3>
							<p>{data.age}</p>
						</section>
						<img src={findImage(data.index)} alt={data.index} style={{ height: "380px" }} />
					</div>
					<section>
						<h3>Composition</h3>
						<p>
							<strong>Size</strong>: {data.size}
						</p>
						<p>
							<strong>Speed</strong>: {data.speed}
						</p>
						<p>{data.size_description}</p>

						{data.traits.length > 0 ? (
							<div>
								<h3>Traits</h3>
								<ul>
									{data.traits.map((trait) => (
										<li key={trait.index}>{trait.name}</li>
									))}
								</ul>
							</div>
						) : null}

						<h3>Language</h3>
						<p>{data.language_desc}</p>
					</section>
					<Link to="/races">
						<button>Back</button>
					</Link>
				</div>
			)}
		</div>
	);
};
