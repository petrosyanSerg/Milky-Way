import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Info from './PageComponents/Info'
import Buttons from './PageComponents/Buttons'
import Cards from './PageComponents/Cards'

import style from "./Page.module.scss"

export default function Page({ data }) {

	return (
		<div className={style.Page}>
			<Routes>
				<Route path="/"
					element={
						<Info
							title={data.name}
							pharagraps={data.overview.content}
							img={data.overview.image}
							wikiUrl={data.overview.source} />} />
				<Route path="/structure"
					element={
						<Info
							title={data.name}
							pharagraps={data.structure.content}
							img={data.structure.image}
							wikiUrl={data.structure.source} />} />
				<Route path="/surface"
					element={
						<Info
							title={data.name}
							pharagraps={data.geology.content}
							img={data.geology.image}
							wikiUrl={data.geology.source}
							structureImage={data.geology.geo}
						/>} />
			</Routes>
			<Buttons />
			<Cards data={data} />
		</div>
	)
}
