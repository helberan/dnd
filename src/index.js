import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Races } from "./races/Races";
import { Classes } from "./classes/Classes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/races", element: <Races /> },
			{ path: "/classes", element: <Classes /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
