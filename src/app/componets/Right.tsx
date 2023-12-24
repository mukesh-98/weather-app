import { FC } from "react";
import { Root, cities } from "../type";
import MainGraph from "./MainGraph";
import Humidity from "./chips/Humidity";
import Wind from "./chips/Wind";
import Precipitation from "./chips/Precipiation";
import UV from "./chips/UV";
import Temp from "./chips/Temp";
import Rain from "./chips/Rain";
type RightProps = {
	handleShowGraph: any;
	getAllWeatherData: any;
	showGarph: boolean;
	weather: Root[];
	index: number;
};

const Right: FC<RightProps> = ({
	weather,
	handleShowGraph,
	showGarph,
	getAllWeatherData,
	index,
}) => {
	return (
		<div className="bg-blue-100 md:w-full lg:w-3/5  lg:h-screen  md:h-full   lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl p-10 ">
			<MainGraph
				handleShowGraph={handleShowGraph}
				getAllWeatherData={getAllWeatherData}
				showGarph={showGarph}
				weather={weather}
			/>
			{cities.map((ele, i) => {
				const cityWeatherData = weather[i];
				return (
					<div
						key={ele}
						className={` ${ele === cities[index] ? "visible " : "not-visible"}`}
					>
						<div className="flex  flex-col md:flex-row ">
							<Humidity cityWeatherData={cityWeatherData} />
							<Wind cityWeatherData={cityWeatherData} />
							<Precipitation cityWeatherData={cityWeatherData} />
						</div>
						<div className="flex  flex-col md:flex-row ">
							<UV cityWeatherData={cityWeatherData} />
							<Temp cityWeatherData={cityWeatherData} />
							<Rain cityWeatherData={cityWeatherData} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Right;
