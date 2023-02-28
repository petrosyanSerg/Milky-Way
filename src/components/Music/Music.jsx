import React from 'react'
import music from "./space.mp3"
export default function Music() {
	return (
		<audio src={music} autoPlay loop volume="0.2" style={{
			opacity: 0,
			position: 'absolute',
			top: "-50%",
			left: "-50%"
		}}></audio>
	)
}
