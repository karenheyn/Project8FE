import "./Mapbox.css";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function App(props) {
  const [viewport, setViewport] = useState({
    latitude: props.coordinates.coordinates.latitude,
    longitude: props.coordinates.coordinates.longitude,
    width: "97%",
    height: "500px",
    zoom: 10
  });
  library.add(faCrosshairs);
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidHVsbHk0c2Nob29sIiwiYSI6ImNrMzloNjQ4dTAzN2gzaXBkZHRxdmdnZTQifQ.z6t7YEVCQRslNMgDjiDOiw"
        mapStyle="mapbox://styles/tully4school/ck39ulbxx06vj1dmgfvfimf4e"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker
          key={props.coordinates._id}
          latitude={props.coordinates.coordinates.latitude}
          longitude={props.coordinates.coordinates.longitude}
        >
          <span className="restaurant-marker">
            <FontAwesomeIcon icon="crosshairs" />
            <span>{props.coordinates.name}</span>
          </span>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
