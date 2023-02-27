import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import style from "./../Page.module.scss"

export default function Info({ title, pharagraps, img, wikiUrl, structureImage = null }) {
	return (
		<>
			<div className={style.Page_Image}>
				<img src={img} alt={title} className={style.Page_Image_Tag} />
				{structureImage && <img src={structureImage} alt={title} className={style.Page_Image_Struct} />}
			</div>
			<div className={style.Info}>
				<div className={style.Info_Block}>
					<h1 className={style.Info_Title}>{title}</h1>
					<p className={style.Info_Pharagraps}>{pharagraps}</p>
					<p className={style.Info_Wiki}>
						<span className={style.Info_Span}>Source: </span>
						<Link to={wikiUrl} className={style.Info_Link} target="_blank">Wikipedia <BsFillArrowUpRightSquareFill size="12px" /></Link>
					</p>
				</div>
			</div>
		</>
	);
}
