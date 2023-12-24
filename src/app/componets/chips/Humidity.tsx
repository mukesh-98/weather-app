import { Root } from "@/app/type";
import { FC } from "react";
import { WiHumidity } from "react-icons/wi";
type HumidityProps = {
	cityWeatherData: Root;
};

const Humidity: FC<HumidityProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl self-center justify-center bg-white m-3 w-full md:w-1/3">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">Humidity</p>
				<div className="bg-blue-500 rounded-md">
					<WiHumidity style={{ height: 24, width: 24 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl">{cityWeatherData?.current?.humidity}%</p>
				{cityWeatherData?.current?.humidity > 0 &&
					cityWeatherData?.current?.humidity <= 40 && (
						<p className="text-green-500 text-md">Good</p>
					)}
				{cityWeatherData?.current?.humidity > 40 &&
					cityWeatherData?.current?.humidity <= 80 && (
						<p className="text-green-500 text-md">Normal</p>
					)}
				{cityWeatherData?.current?.humidity > 80 &&
					cityWeatherData?.current?.humidity <= Number.NEGATIVE_INFINITY && (
						<p className="text-red-500 text-md">Bad</p>
					)}
			</div>
			<div className="border rounded-md  border-blue-100">
				<div
					style={{
						width: `${cityWeatherData?.current?.humidity}%`,
						height: 10,
					}}
					className="bg-blue-500  rounded-md"
				/>
			</div>
		</div>
	);
};

export default Humidity;
