import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/races">Races</Link>
				</li>
				<li>
					<Link to="/classes">Classes</Link>
				</li>
			</ul>
		</nav>
	);
};
