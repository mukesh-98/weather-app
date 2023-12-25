import { Root } from "@/app/type";
import { FC } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
interface UVProps {
	cityWeatherData: Root;
}

const UV: FC<UVProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl  flex flex-col  justify-between bg-white md:m-3 mb-3 flex-1 w-full ">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">UV Index</p>
				<div className="bg-blue-500 rounded-md p-1">
					<MdOutlineWbSunny style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl mr-2">{cityWeatherData?.current?.uv}</p>
				{cityWeatherData?.current?.uv > 0 && cityWeatherData?.current?.uv <= 2 && (
					<p className="text-green-700 text-sm">Very Good</p>
				)}
				{cityWeatherData?.current?.uv > 2 && cityWeatherData?.current?.uv <= 5 && (
					<p className="text-green-500 text-sm">Good</p>
				)}
				{cityWeatherData?.current?.uv > 5 && cityWeatherData?.current?.uv <= 7 && (
					<p className="text-blue-500 text-sm">Medium </p>
				)}
				{cityWeatherData?.current?.uv > 7 && cityWeatherData?.current?.uv <= 10 && (
					<p className="text-red-500 text-sm">Bad</p>
				)}
				{cityWeatherData?.current?.uv > 11 && (
					<p className="text-red-700 text-sm"> Very bad</p>
				)}
			</div>
			<div className="flex justify-between">
				{[
					{ label: "0-2", max: 2, min: 0 },
					{ label: "3-5", max: 5, min: 3 },
					{ label: "6-7", max: 7, min: 6 },
					{ label: "8-10", max: 10, min: 8 },
					{ label: "11+", max: Number.MAX_VALUE, min: 11 },
				].map((ele) => (
					<div
						key={ele.label}
						className="w-1/5"
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
									width:
										ele.min <= cityWeatherData?.current?.uv &&
										ele.max > cityWeatherData?.current?.uv
											? `${33.33 * cityWeatherData?.current?.uv}%`
											: 0,
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
