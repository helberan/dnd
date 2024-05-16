import { useEffect, useState } from "react";
import { Card } from "../Card";
import classesDescription from "./classesDescription.json";
import barbarian from "./classes-images/barbarian.png";
import bard from "./classes-images/bard.png";
import cleric from "./classes-images/cleric.png";
import druid from "./classes-images/druid.png";
import fighter from "./classes-images/fighter.png";
import monk from "./classes-images/monk.png";
import paladin from "./classes-images/paladin.png";
import ranger from "./classes-images/ranger.png";
import rogue from "./classes-images/rogue.png";
import sorcerer from "./classes-images/sorcerer.png";
import warlock from "./classes-images/warlock.png";
import wizard from "./classes-images/wizard.png";

export const Classes = () => {
	const [classes, setClasses] = useState();
	const classesImages = {
		barbarian,
		bard,
		cleric,
		druid,
		fighter,
		monk,
		paladin,
		ranger,
		rogue,
		sorcerer,
		warlock,
		wizard,
	};

	const findDescription = (iteratedClass) => {
		return classesDescription.find((iteratedClassDesc) => iteratedClassDesc.id === iteratedClass.index);
	};

	const findImage = (iteratedClass) => {
		return classesImages[iteratedClass.id];
	};

	useEffect(() => {
		const fetchClasses = async () => {
			try {
				const classesData = await fetch("https://www.dnd5eapi.co/api/classes").then((res) => res.json());
				setClasses(classesData.results);
				console.log(classes);
			} catch (err) {
				console.error(err);
			}
		};

		fetchClasses();
	}, []);

	return (
		<div className="Main">
			<h1>Classes</h1>
			{classes === undefined ? (
				<p>Loading data...</p>
			) : (
				<div className="CardsWrapper">
					{classes.map((professionClass) => (
						<Card
							key={professionClass.index}
							detail={professionClass}
							findDescription={findDescription}
							findImage={findImage}
						/>
					))}
				</div>
			)}
		</div>
	);
};
