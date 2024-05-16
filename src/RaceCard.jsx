export const RaceCard = ({ race, findDescription, findImage }) => {
	return (
		<div className="RaceCard">
			<section>
				<h2>{race.name}</h2>
				<p>{findDescription(race).desc}</p>
				<p>{race.size_description}</p>
				<button>Show details</button>
			</section>

			<img src={findImage(findDescription(race))} alt={race.name} style={{ height: "380px" }} />
		</div>
	);
};
