import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../Loader";

export const ClassDetail = () => {
	const { id } = useParams();
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://www.dnd5eapi.co/api/classes/${id}`).then((res) => res.json());
			setData(await response);
			console.log(data);
		};

		fetchData();
	}, []);

	return (
		<div className="Card">
			{data === undefined ? (
				<Loader />
			) : (
				<div>
					<h1>{data.name}</h1>
					<p>{data.hit_die}</p>
				</div>
			)}
		</div>
	);
};
