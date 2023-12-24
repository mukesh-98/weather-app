import { Root } from "@/app/type";
import { FC } from "react";
import { BsCloudRainHeavy } from "react-icons/bs";
interface PrecipitationProps {
	cityWeatherData: Root;
}

const Precipitation: FC<PrecipitationProps> = ({ cityWeatherData }) => {
	return (
		<div className=" p-4 rounded-2xl flex flex-col  justify-between bg-white md:m-3 mb-3 flex-1 w-full ">
			<div className="flex justify-between">
				<p className="text-black text-md leading-6">Precipiation</p>
				<div className="bg-blue-500 rounded-md p-1">
					<BsCloudRainHeavy style={{ height: 16, width: 16 }} />
				</div>
			</div>
			<div className="flex justify-center my-2 items-baseline">
				<p className="text-black text-3xl">
					{cityWeatherData?.current?.precip_mm} ich
				</p>
			</div>
			<div className="flex  justify-between">
				{[
					{ label: "10", value: 10 },
					{ label: "20", value: 20 },
					{ label: "30", value: 30 },
					{ label: "40", value: 40 },
					{ label: "50", value: 50 },
					{ label: "60", value: 60 },
					{ label: "70", value: 70 },
					{ label: "80", value: 80 },
					{ label: "90", value: 90 },
					{ label: "100", value: 100 },
					{ label: "100+", value: 99999999 },
				].map((ele) => (
					<div
						key={ele.value}
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
									width: ele.value <= cityWeatherData?.current.precip_in ? "100%" : 0,
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

export default Precipitation;
