/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { FC, useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Root, cities } from "../type";
import { WeatherContext } from "../context/Weather";
type LeftProps = {};

const Left: FC<LeftProps> = () => {
	const { weather, index, callPrevious, callNext } = useContext(WeatherContext);
	return (
		<div
			className={`p-5 flex justify-between flex-row ${cities[index]} lg:w-2/5`}
		>
			<button
				className="left hover:bg-blue-300 hover:text-blue-600"
				onClick={callPrevious}
			>
				<FaChevronLeft />
			</button>
			{cities.map((ele, i) => {
				const cityWeatherData = weather?.[i];
				return (
					<div
						key={ele}
						className={` ${
							ele === cities[index]
								? "visible  p-5 self-center justify-center card"
								: "not-visible"
						}`}
					>
						<p className={`text-2xl text-center title`}>
							{cityWeatherData?.location.name}
						</p>

						<p className="text-9xl temp text-center">
							{cityWeatherData?.current.temp_c}
						</p>

						<div className="flex justify-center flex-row">
							<img
								src={cityWeatherData?.current.condition.icon}
								style={{ height: 45, width: 45 }}
								className="mr-2"
							/>
							<p className="text-4xl">{cityWeatherData?.current.condition.text}</p>
						</div>
						{cityWeatherData?.current.last_updated && (
							<p className="my-3 text-center">
								{new Date(cityWeatherData?.current.last_updated).toDateString()}
							</p>
						)}
					</div>
				);
			})}
			<button
				className="right hover:bg-blue-300 hover:text-blue-600"
				onClick={callNext}
			>
				<FaChevronRight />
			</button>
		</div>
	);
};

export default Left;
