import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
	const { pathname } = useLocation(); //uložení url do proměnné pathname

	useEffect(() => {
		window.scrollTo(0, 0); //scroll na 0 0
	}, [pathname]); //jakmile se změní url

	return null;
}
