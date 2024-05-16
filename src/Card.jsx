export const Card = ({ detail, findDescription, findImage }) => {
	return (
		<div className="Card">
			<section>
				<h2>{detail.name}</h2>
				<p>{findDescription(detail).desc}</p>
				<button>Show details</button>
			</section>

			<img src={findImage(findDescription(detail))} alt={detail.name} style={{ height: "380px" }} />
		</div>
	);
};
