import { Root } from "@/app/type";
import { FC } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
interface UVProps {
	cityWeatherData: Root;
}

const UV: FC<UVProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl self-center justify-center bg-white m-3 w-full md:w-1/3">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">UV Index</p>
				<div className="bg-blue-500 rounded-md p-1">
					<MdOutlineWbSunny style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl">{cityWeatherData?.current?.uv}</p>
				{cityWeatherData?.current?.uv > 0 && cityWeatherData?.current?.uv <= 2 && (
					<p className="text-green-700 text-md">Very Good</p>
				)}
				{cityWeatherData?.current?.uv > 2 && cityWeatherData?.current?.uv <= 5 && (
					<p className="text-green-500 text-md">Good</p>
				)}
				{cityWeatherData?.current?.uv > 5 && cityWeatherData?.current?.uv <= 7 && (
					<p className="text-blue-500 text-md">Medium </p>
				)}
				{cityWeatherData?.current?.uv > 7 && cityWeatherData?.current?.uv <= 10 && (
					<p className="text-red-500 text-md">Bad</p>
				)}
				{cityWeatherData?.current?.uv > 11 && (
					<p className="text-red-700 text-md"> Very bad</p>
				)}
			</div>
			<div className="flex w-full justify-between">
				{[
					{ label: "0-2", value: 2 },
					{ label: "3-5", value: 5 },
					{ label: "6-7", value: 7 },
					{ label: "8-10", value: 10 },
					{ label: "11+", value: 11 },
				].map((ele) => (
					<div
						key={ele.value}
						className="w-20"
					>
						<p
							className="text-slate-500 text-center"
							style={{ fontSize: 9 }}
						>
							{ele.label}
						</p>
						<div className="border rounded-md mx-1 border-blue-100  h-3">
							<div
								style={{
									width: ele.value <= cityWeatherData?.current.uv ? "100%" : 0,
								}}
								className="bg-blue-500  rounded-md h-3"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UV;
