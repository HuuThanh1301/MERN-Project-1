import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  const APIKEY = process.env.REACT_APP_MAP_API_KEY;

  useEffect(() => {
    mapboxgl.accessToken = APIKEY;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: center,
      zoom: zoom,
    });
    // new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom, APIKEY]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import ReactMapGL, { Marker } from "react-map-gl";

// import "./Map.css";

// const Map = (props) => {
//   const { center, zoom } = props;

//   const APIKEY =
//     "pk.eyJ1Ijoibmh0aGFuaGRuOTUiLCJhIjoiY2x0ZXgxeTZrMGx2bjJqbzFnMTd0bzBnZyJ9.3Ja0qZgrqu8BipSj0Mit7g";

//   return (
//     <div className={`map ${props.className}`} style={props.style}>
//       <ReactMapGL
//         mapboxAccessToken={APIKEY}
//         initialViewState={{
//           longitude: center.lng,
//           latitude: center.lat,
//           zoom: zoom,
//         }}
//         mapStyle="mapbox://styles/mapbox/streets-v12"
//       >
//         {/* <Marker latitude={center.lat} longitude={center.lng} anchor="bottom"/> */}
//       </ReactMapGL>
//     </div>
//   );
// };

// export default Map;
