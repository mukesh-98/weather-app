"use client";

import Main from "./context/Main";
import Weather from "./context/Weather";

export default function Home() {
	return (
		<Weather>
			<Main />
		</Weather>
	);
}
