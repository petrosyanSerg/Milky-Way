import React from 'react'
import { NavLink, Link } from "react-router-dom";

import style from '../Header.module.scss'

export default function Menu({ active, isActiveOff }) {
	return (
		<nav className={style.Header_Navbar}>
			<ul className={`${style.Header_Menu} ${active ? style.actvie_menu : ""}`}>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/mercury"
						className={style.Header_MenuLink}>
						MERCURY
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()} >
					<NavLink to="/venus" className={style.Header_MenuLink}>
						VENUS
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()} >
					<NavLink to="/earth" className={style.Header_MenuLink}>
						EARTH
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/mars" className={style.Header_MenuLink}>
						MARS
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/jupiter" className={style.Header_MenuLink}>
						JUPITER
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/saturn" className={style.Header_MenuLink}>
						SATURN
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/uranus" className={style.Header_MenuLink}>
						URANUS
					</NavLink>
				</li>
				<li className={style.Header_MenuItem} onClick={() => isActiveOff()}>
					<NavLink to="/neptune" className={style.Header_MenuLink}>
						NEPTUNE
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
