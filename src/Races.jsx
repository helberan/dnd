import { useEffect, useState } from "react";
import racesDescription from "./racesDescription.json";
import dragonborn from "./races-images/dragonborn.png";
import dwarf from "./races-images/dwarf.png";
import elf from "./races-images/elf.png";
import gnome from "./races-images/gnome.png";
import halfElf from "./races-images/half-elf.png";
import halfOrc from "./races-images/half-orc.png";
import halfling from "./races-images/halfling.png";
import human from "./races-images/human.png";
import tiefling from "./races-images/tiefling.png";

import { RaceCard } from "./RaceCard";

export const Races = () => {
	const [races, setRaces] = useState();
	const racesImages = { dragonborn, dwarf, elf, gnome, halfElf, halfOrc, halfling, human, tiefling };

	const findDescription = (iteratedRace) => {
		console.log(iteratedRace);
		return racesDescription.find((iteratedRaceDesc) => iteratedRaceDesc.id === iteratedRace.index);
	};

	const findImage = (iteratedRace) => {
		return racesImages[iteratedRace.imgId];
	};

	useEffect(() => {
		const fetchRaces = async () => {
			try {
				const racesData = await fetch("https://www.dnd5eapi.co/api/races").then((res) => res.json());
				setRaces(racesData.results);
			} catch (err) {
				console.error(err);
			}
		};
		fetchRaces();
	}, []);

	return (
		<div className="Races">
			<h1>Races</h1>
			{races === undefined ? (
				<p>Loading data...</p>
			) : (
				<div className="RaceCardsWrapper">
					{races.map((race) => (
						<RaceCard key={race.index} race={race} findDescription={findDescription} findImage={findImage} />
					))}
				</div>
			)}
		</div>
	);
};
