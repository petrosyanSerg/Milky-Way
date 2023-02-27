import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Menu from "./Menu/Menu";
import style from "./Header.module.scss";

export default function Header() {
	const [active, setActive] = useState(false);

	function isActiveOff(bool) {
		setActive(!active);
	}

	return (
		<header className={style.Header}>
			<div className={style.Header_Logo}>
				<Link to="/" className={style.Header_LogoLink}>
					Milky Way
				</Link>
			</div>
			<div className={style.Menu_line} onClick={() => isActiveOff()}>
				{active ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
			</div>
			<Menu active={active} isActiveOff={isActiveOff} />
		</header>
	);
}
