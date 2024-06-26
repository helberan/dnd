import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { Races } from "./races/Races";
import { Classes } from "./classes/Classes";
import { Home } from "./Home";
import { Navigation } from "./Navigation";
import { RaceDetail } from "./races/RaceDetail";
import { ClassDetail } from "./classes/ClassDetail";
import { Divider } from "./Divider";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<header>
					<Navigation />
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/races" element={<Races />} />
					<Route path="/classes" element={<Classes />} />
					<Route path="/races/:id" element={<RaceDetail />} />
					<Route path="/classes/:id" element={<ClassDetail />} />
				</Routes>
				<footer>
					<Divider />
				</footer>
			</div>
		</Router>
	);
}

export default App;
