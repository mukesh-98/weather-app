"use client";
import { FC, useContext, useEffect } from "react";
import { WeatherContext } from "./Weather";
import Left from "../componets/Left";
import Right from "../componets/Right";

interface MainProps {}

const Main: FC<MainProps> = () => {
	const { weather, getAllWeatherData } = useContext(WeatherContext);

	useEffect(() => {
		getAllWeatherData();

		return () => {};
	}, [getAllWeatherData]);

	if (!weather) {
		return (
			<div className=" bg-blue-500 h-screen">
				<div className="weather-loader" />
			</div>
		);
	}

	return (
		<div className="bg-blue-500 flex flex-col lg:flex-row h-screen w-full ">
			<Left />
			<Right />
		</div>
	);
};

export default Main;
