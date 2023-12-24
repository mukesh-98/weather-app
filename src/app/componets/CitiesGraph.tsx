"use client";

import { cities } from "../type";
import { FC } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface CitiesGraphProps {
	data: number[];
}

const CitiesGraph: FC<CitiesGraphProps> = ({ data }) => {
	return (
		<div className="h-3/6  min-w-full bg-white	rounded-xl">
			<Chart
				options={{
					chart: {
						id: "apexchart-example",
					},
					xaxis: {
						categories: cities,
					},
					tooltip: {
						enabled: false,
					},
					stroke: {
						curve: "smooth",
					},
				}}
				series={[
					{
						name: "Comparision",
						data,
					},
				]}
				type="line"
				height={"100%"}
				width={"100%"}
			/>
		</div>
	);
};

export default CitiesGraph;
