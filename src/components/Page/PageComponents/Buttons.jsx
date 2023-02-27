import React from 'react'
import { Link } from 'react-router-dom';

import style from "./../Page.module.scss"

export default function Buttons() {
	return (
		<div className={style.Links}>
			<div className={style.Links_Button}>
				<span className={style.Links_Number}>01 </span>
				<Link to="">Overview</Link>
			</div>
			<div className={style.Links_Button}>
				<span className={style.Links_Number}>02 </span>
				<Link to="structure">Structure</Link>
			</div>
			<div className={style.Links_Button}>
				<span className={style.Links_Number}>03 </span>
				<Link to="surface" >Surface</Link>
			</div>
		</div>
	)
}
