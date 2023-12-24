import { Root } from "@/app/type";
import { FC } from "react";
import { FaWind } from "react-icons/fa6";
interface WindProps {
	cityWeatherData: Root;
}

const Wind: FC<WindProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl self-center justify-center bg-white m-3 w-full md:w-1/3">
			<div className="flex justify-between pb-4">
				<p className="text-black text-md leading-6">Wind</p>
				<div className="bg-blue-500 rounded-md p-1">
					<FaWind style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<p className="text-black text-3xl pb-4">
				{cityWeatherData?.current?.wind_kph} kmph
			</p>
		</div>
	);
};

export default Wind;
