import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../Loader";
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

export const ClassDetail = () => {
	const { id } = useParams();
	const [data, setData] = useState();
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

	const findImage = (iteratedClass) => {
		return classesImages[iteratedClass];
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://www.dnd5eapi.co/api/classes/${id}`).then((res) => res.json());
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
							<br />
							<h3>Hit points</h3>
							<p>
								Hit dice: 1d{data.hit_die} per {data.index} level
							</p>
							<h3>Proficiencies</h3>
							<ul>
								{data.proficiencies.map((proficiency) => (
									<li key={proficiency.index}>{proficiency.name}</li>
								))}
							</ul>
						</section>
						<img src={findImage(data.index)} alt={data.index} style={{ height: "380px" }} />
					</div>
					<section>
						<p>
							<strong>Skills</strong>: {data.proficiency_choices[0].desc}
						</p>
					</section>
					<Link to="/classes">
						<button>Back</button>
					</Link>
				</div>
			)}
		</div>
	);
};
