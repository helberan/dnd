import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/races">Races</Link>
						</li>
						<li>
							<Link to="/classes">Classes</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</div>
	);
}

export default App;
