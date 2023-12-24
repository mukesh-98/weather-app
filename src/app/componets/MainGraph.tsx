"use client";
import { FC, useContext } from "react";
import { IoIosRefreshCircle } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import CitiesGraph from "./CitiesGraph";
import { WeatherContext } from "../context/Weather";

type MainGraphProps = {};

const MainGraph: FC<MainGraphProps> = () => {
	const { handleShowGraph, showGarph, getAllWeatherData, weather } =
		useContext(WeatherContext);
	return (
		<>
			<div className="toolbar flex justify-between   md:p-4 rounded-md mb-3 ">
				<div className="flex flex-col justify-center">
					<p className="text-black font-bold text-2xl leading-6">
						Welcome back User !
					</p>
					<p className="text-black text-md leading-6 mt-2">
						Check out today`s weather information
					</p>
				</div>
				<div className="self-center flex flex-col md:flex-row">
					<button
						className="bg-blue-500 md:flex lg:hidden px-2 py-1 my-2 rounded-md mx-3"
						onClick={handleShowGraph}
					>
						<VscGraphLine />
					</button>
					<button
						className="bg-blue-500  mobile lg:flex  px-2 py-1 rounded-md mx-3"
						onClick={handleShowGraph}
					>
						<p className="mx-2">{showGarph ? "Hide " : "Show "}Graph </p>
						<div className="self-center">
							<VscGraphLine />
						</div>
					</button>
					<button
						className="bg-blue-500  px-2 py-1 rounded-md mx-3 my-2 lg:my-0"
						onClick={getAllWeatherData}
					>
						<IoIosRefreshCircle />
					</button>
				</div>
			</div>
			{showGarph && weather && weather?.length > 0 && (
				<CitiesGraph data={weather?.map((ele) => ele.current.temp_c)} />
			)}
			{showGarph && (
				<p className="text-black text-md leading-6 mt-2">
					More details about weather
				</p>
			)}
		</>
	);
};

export default MainGraph;
