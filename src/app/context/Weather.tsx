"use client";
import { createContext, FC, useCallback, useState } from "react";
import { cities, Root } from "../type";

type WeatherContext = {
	weather?: Root[] | undefined;
	index: number;
	callPrevious?: any;
	callNext?: any;
	handleShowGraph?: any;
	getAllWeatherData?: any;
	showGarph?: boolean;
};
export const WeatherContext = createContext<WeatherContext>({ index: 0 });

const Weather: FC<any> = (props) => {
	const [weather, setWeather] = useState<Root[]>();
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

	function callPrevious() {
		setIndex((i) => (i <= 0 ? cities.length - 1 : i - 1));
	}
	function callNext() {
		setIndex((i) => (i >= cities.length - 1 ? 0 : i + 1));
	}

	const handleShowGraph = () => {
		setShowGraph((pre) => !pre);
	};
	return (
		<WeatherContext.Provider
			value={{
				weather,
				index,
				showGarph,
				getAllWeatherData,
				callNext,
				callPrevious,
				handleShowGraph,
			}}
		>
			{props?.children}
		</WeatherContext.Provider>
	);
};

export default Weather;
