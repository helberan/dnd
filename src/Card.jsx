import { Link } from "react-router-dom";

export const Card = ({ detail, findDescription, findImage }) => {
	return (
		<div className="Card">
			<section>
				<h2>{detail.name}</h2>
				<p>{findDescription(detail).desc}</p>
				<Link to={`/${findDescription(detail).basePath}/${detail.index}`}>
					<button>Show details</button>
				</Link>
			</section>

			<img src={findImage(findDescription(detail))} alt={detail.name} style={{ height: "380px" }} />
		</div>
	);
};
