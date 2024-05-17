import dnd from "./dnd.jpg";

export const Home = () => {
	return (
		<div className="Main">
			<div className="Main-section">
				<h1>Dangeons & Dragons</h1>
				<p>
					<strong>Dungeons & Dragons</strong> (abbreviated as <strong>D&D</strong>) is a paper-and-pencil role-playing
					game (RPG). Gary Gygax and Dave Arneson created Dungeons & Dragons in the year 1974. It was first published by
					Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast since 1997.
				</p>
				<img
					src={dnd}
					alt="Dangeons and Dragons"
					id="dnd"
					style={{ height: "400px", width: "auto", paddingLeft: "25px" }}
				/>
				<p>
					It is normally played indoors with the participants seated around a tabletop. A&nbsp;typical{" "}
					<em>Dungeons & Dragons</em>
					game consists of an "adventure" in a fantasy world or "campaign setting". Typically, each player controls only
					a single character. The results of the characters' choices and the overall storyline for the game are
					determined by the Dungeon Master (DM) according to the rules of the game and the DM's interpretation of those
					rules.
				</p>
				<p>
					Many optional accessories are available to enhance the game, such as expansion rulebooks, pre-designed
					adventures and various campaign settings. Commercially published campaign settings are{" "}
					<em>Forgotten Realms</em>, <em>Greyhawk</em>, <em>Dragonlance</em>, <em>Eberron</em> and <em>Dark Sun</em>.
					Pre-made adventures (previously known as "modules") have been published throughout the history of Dungeons &
					Dragons.
				</p>
			</div>
		</div>
	);
};
