import { FC, useContext } from "react";
import { Root, cities } from "../type";
import MainGraph from "./MainGraph";
import Humidity from "./chips/Humidity";
import Wind from "./chips/Wind";
import Precipitation from "./chips/Precipiation";
import UV from "./chips/UV";
import Temp from "./chips/Temp";
import Rain from "./chips/Rain";
import { WeatherContext } from "../context/Weather";
type RightProps = {};

const Right: FC<RightProps> = ({}) => {
	const { weather, index } = useContext(WeatherContext);
	return (
		<div className="bg-blue-100  lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl p-10 lg:w-3/5 lg:overflow-y-auto ">
			<MainGraph />
			{cities.map((ele, i) => {
				const cityWeatherData = weather?.[i];
				if (cityWeatherData) {
					return (
						<div
							key={ele}
							className={` ${ele === cities[index] ? "visible " : "not-visible"}`}
						>
							<div className="flex  flex-col md:flex-row justify-between ">
								<Humidity cityWeatherData={cityWeatherData} />
								<Wind cityWeatherData={cityWeatherData} />
							</div>
							<div className="flex  flex-col md:flex-row justify-between ">
								<Precipitation cityWeatherData={cityWeatherData} />
								<UV cityWeatherData={cityWeatherData} />
							</div>
							<div className="flex  flex-col md:flex-row  justify-between">
								<Temp cityWeatherData={cityWeatherData} />
								<Rain cityWeatherData={cityWeatherData} />
							</div>
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Right;
