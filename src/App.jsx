import { Routes, Route } from "react-router-dom";

import MainPage from "./components/Page/MainPage/MainPage";
import Page from "./components/Page/Page";
import Layout from "./components/Layout";



//data
import { earthData } from "./data/EarthData"
import { jupiterData } from "./data/JupiterData"
import { marsData } from "./data/MarsData"
import { mercuryData } from "./data/MercuryData"
import { neptuneData } from "./data/NeptuneData"
import { saturnData } from "./data/SaturnData"
import { uranusData } from "./data/UranusData"
import { venusData } from "./data/VenusData"



function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="mercury/*" element={<Page data={mercuryData} />} />
					<Route path="venus/*" element={<Page data={venusData} />} />
					<Route path="earth/*" element={<Page data={earthData} />} />
					<Route path="mars/*" element={<Page data={marsData} />} />
					<Route path="jupiter/*" element={<Page data={jupiterData} />} />
					<Route path="saturn/*" element={<Page data={saturnData} />} />
					<Route path="uranus/*" element={<Page data={uranusData} />} />
					<Route path="neptune/*" element={<Page data={neptuneData} />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
