import "./Mapbox.css";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function App(props) {
	const [viewport, setViewport] = useState({
		latitude: props.coordinates.coordinates.latitude,
		longitude: props.coordinates.coordinates.longitude,
		width: "80%",
		height: "500px",
		zoom: 10
	});
	console.log(props);
	return (
		<div>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				mapStyle='mapbox://styles/tully4school/ck39t2dgw0kme1ckki4zgxjyq'
				onViewportChange={viewport => {
					setViewport(viewport);
				}}
			>
				<Marker
					key={props.coordinates._id}
					latitude={props.coordinates.coordinates.latitude}
					longitude={props.coordinates.coordinates.longitude}
				>
					<div className='restaurant-marker'>{props.coordinates.name}</div>
				</Marker>
			</ReactMapGL>
		</div>
	);
}
