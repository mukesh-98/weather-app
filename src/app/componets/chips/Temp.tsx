import { Root } from "@/app/type";
import { FC } from "react";

import { FaTemperatureEmpty } from "react-icons/fa6";
interface TempProps {
	cityWeatherData: Root;
}

const Temp: FC<TempProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl  flex flex-col  justify-between bg-white md:m-3 mb-3 flex-1 w-full">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">Feels Like</p>
				<div className="bg-blue-500 rounded-md p-1">
					<FaTemperatureEmpty style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl deg">
					{cityWeatherData?.current?.feelslike_c}
					<sup>c</sup>
				</p>
			</div>
			<div className="flex justify-between">
				{[0, 25, 50].map((ele) => (
					<p
						key={ele}
						style={{ fontSize: 9 }}
						className="text-slate-500 text-center"
					>
						{ele}
						<sup>o</sup>
					</p>
				))}
			</div>
			<div className="border rounded-md  border-blue-100">
				<div
					style={{
						width: `${cityWeatherData?.current?.feelslike_c}%`,
						height: 10,
					}}
					className="bg-blue-500  rounded-md"
				/>
			</div>
		</div>
	);
};

export default Temp;
