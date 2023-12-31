import { Root } from "@/app/type";
import { FC } from "react";
import { WiHumidity } from "react-icons/wi";
type HumidityProps = {
	cityWeatherData: Root;
};

const Humidity: FC<HumidityProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl flex flex-col  justify-between bg-white md:m-3 mb-3 flex-1 w-full ">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">Humidity</p>
				<div className="bg-blue-500 rounded-md">
					<WiHumidity style={{ height: 24, width: 24 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl mr-2">
					{cityWeatherData?.current?.humidity}
					<span className="text-base text-slate-600">% </span>
				</p>
				{cityWeatherData?.current?.humidity > 0 &&
					cityWeatherData?.current?.humidity <= 40 && (
						<p className="text-green-500 text-sm">Good</p>
					)}
				{cityWeatherData?.current?.humidity > 40 &&
					cityWeatherData?.current?.humidity <= 80 && (
						<p className="text-green-500 text-sm">Normal</p>
					)}
				{cityWeatherData?.current?.humidity > 80 &&
					cityWeatherData?.current?.humidity <= Number.NEGATIVE_INFINITY && (
						<p className="text-red-500 text-sm">Bad</p>
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
