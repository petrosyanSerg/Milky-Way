import React from "react";
import { Link } from "react-router-dom";

import style from "./MainPage.module.scss";

export default function MainPage() {
	return (
		<div className={style.Wrapper}>
			<div className={style.Container}>
				<div className={style.Container_Sun}></div>
				<Link
					className={style.Container_Planets} id="neptune" to="/neptune"></Link>
				<Link
					className={style.Container_Planets} id="uranus" to="/uranus"></Link>
				<Link
					className={style.Container_Planets} id="saturn" to="/saturn"></Link>
				<Link
					className={style.Container_Planets} id="jupiter" to="/jupiter"></Link>
				<Link
					className={style.Container_Planets} id="mars" to="/mars"></Link>
				<Link
					className={style.Container_Planets} id="earth" to="/earth"></Link>
				<Link
					className={style.Container_Planets} id="venus" to="/venus"></Link>
				<Link
					className={style.Container_Planets} id="mercury" to="/mercury"></Link>
			</div>
		</div>
	);
}
