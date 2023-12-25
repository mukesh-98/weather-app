import { Root } from "@/app/type";
import { FC } from "react";

import { IoUmbrellaOutline } from "react-icons/io5";
interface RainProps {
	cityWeatherData: Root;
}

const Rain: FC<RainProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl flex flex-col  justify-between bg-white md:m-3 mb-3 flex-1 w-full ">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">Chance of rain</p>
				<div className="bg-blue-500 rounded-md p-1">
					<IoUmbrellaOutline style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl">
					{cityWeatherData?.current?.cloud}
					<span className="text-base text-slate-600">%</span>
				</p>
			</div>
			<div className="flex justify-between">
				{[0, 25, 50, 75, 100].map((ele) => (
					<p
						key={ele}
						style={{ fontSize: 9 }}
						className="text-slate-500 text-center"
					>
						{ele}%
					</p>
				))}
			</div>
			<div className="border rounded-md  border-blue-100">
				<div
					style={{
						width: `${cityWeatherData?.current?.cloud}%`,
						height: 10,
					}}
					className="bg-blue-500  rounded-md"
				/>
			</div>
		</div>
	);
};

export default Rain;
