import React from 'react'
import style from "./../Page.module.scss"

export default function Cards({ data }) {

	return (
		<div className={style.CardBlock}>
			<ul className={style.CardBlock_Cards}>
				<li className={style.CardBlock_Card}>
					<span className={style.CardBlock_Title}>ROTATION TIME</span>
					<span className={style.CardBlock_Value}>{data.rotation}</span>
				</li>
				<li className={style.CardBlock_Card}>
					<span className={style.CardBlock_Title}>REVOLUTION TIME</span>
					<span className={style.CardBlock_Value}>{data.revolution}</span>
				</li>
				<li className={style.CardBlock_Card}>
					<span className={style.CardBlock_Title}>RADIUS</span>
					<span className={style.CardBlock_Value}>{data.radius}</span>
				</li>
				<li className={style.CardBlock_Card}>
					<span className={style.CardBlock_Title}>AVERAGE TEMP</span>
					<span className={style.CardBlock_Value}>{data.temperature}</span>
				</li>
			</ul>
		</div>
	)
}
