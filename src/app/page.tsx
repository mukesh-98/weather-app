/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useCallback, useEffect, useState } from "react";
import { Root } from "./type";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const cities = ["Bangalore", "Chennai", "Kolkata", "Delhi", "Mumbai"];
export default function Home() {
	const [weather, setWeather] = useState<Root>();
	const [index, setIndex] = useState(0);

	const forecast = useCallback(async () => {
		const url = `${process.env.API_ENDPOINT}current.json?q=${cities[index]} india&key=${process.env.API_KEY}`;
		const response = await fetch(url);
		const data = await response.json();
		if (data) {
			setWeather(data);
		}
	}, [index]);

	useEffect(() => {
		forecast();
		return () => {};
	}, [forecast]);

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
	} else {
		return (
			<div className="bg-blue-500 grid grid-cols-10 grid-rows-10 h-screen">
				<div
					className={`lg:col-span-4 col-span-10 lg:row-span-10 row-span-4 lg:h-screen p-5 flex justify-between flex-row ${cities[index]}`}
				>
					<button
						className="left"
						onClick={callPrevious}
					/>
					{cities.map((ele) => (
						<div
							key={ele}
							className={` ${
								ele === cities[index]
									? "visible  p-5 self-center justify-center card"
									: "not-visible"
							}`}
						>
							<p className={`text-2xl text-center title`}>{weather?.location.name}</p>

							<p className="text-9xl temp text-center">{weather?.current.temp_c}</p>

							<div className="flex justify-center flex-row">
								<img
									src={weather?.current.condition.icon}
									style={{ height: 45, width: 45 }}
									className="mr-2"
								/>
								<p className="text-4xl">{weather?.current.condition.text}</p>
							</div>
							{weather?.current.last_updated && (
								<p className="my-3 text-center">
									{new Date(weather?.current.last_updated).toDateString()}
								</p>
							)}
						</div>
					))}
					<button
						className="right"
						onClick={callNext}
					/>
				</div>
				<div className="bg-blue-100 lg:col-span-6 col-span-10 lg:row-span-10 row-span-6 lg:h-screen  lg:rounded-l-3xl  lg:rounded-r-none rounded-t-3xl p-10">
					<div className="toolbar bg-blue-300 flex  p-4 rounded-md mb-7"></div>
					<div className="h-3/6  min-w-full	card">
						<Chart
							options={{
								chart: {
									id: "apexchart-example",
								},
								xaxis: {
									categories: cities,
								},
							}}
							series={[
								{
									name: "series-1",
									data: [30, 40, 35, 50, 49],
								},
							]}
							type="bar"
							height={"100%"}
							width={"100%"}
						/>
					</div>
				</div>
			</div>
		);
	}
}
