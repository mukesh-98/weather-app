"use client";
import { useCallback, useEffect, useState } from "react";
import { Root, cities } from "./type";

import Left from "./componets/Left";
import Right from "./componets/Right";

export default function Home() {
	const [weather, setWeather] = useState<Root[]>([]);
	const [index, setIndex] = useState(0);
	const [showGarph, setShowGraph] = useState(false);

	const getAllWeatherData = useCallback(async () => {
		let response = await Promise.all(
			cities.map(async (ele) => {
				const url = `${process.env.API_ENDPOINT}current.json?q=${ele} india&key=${process.env.API_KEY}`;
				const response = await fetch(url);
				const data = await response.json();
				return data;
			})
		);
		setWeather(response);
	}, []);

	useEffect(() => {
		getAllWeatherData();
		return () => {};
	}, [getAllWeatherData]);

	function callPrevious() {
		setIndex((i) => (i <= 0 ? cities.length - 1 : i - 1));
	}
	function callNext() {
		setIndex((i) => (i >= cities.length - 1 ? 0 : i + 1));
	}

	if (!weather) {
		return (
			<div className=" bg-blue-500 h-screen">
				<div className="weather-loader" />
			</div>
		);
	}
	const handleShowGraph = () => {
		setShowGraph((pre) => !pre);
	};
	return (
		<div className="bg-blue-500 flex flex-col lg:flex-row h-screen w-full ">
			<Left
				weather={weather}
				index={index}
				callPrevious={callPrevious}
				callNext={callNext}
			/>
			<Right
				handleShowGraph={handleShowGraph}
				getAllWeatherData={getAllWeatherData}
				showGarph={showGarph}
				weather={weather}
				index={index}
			/>
		</div>
	);
}
