import { GoogleMap, LoadScript } from "@react-google-maps/api";

import MapStyle from "./MapStyle";

//inital map size
const containerStyle = {
  width: "100vw",
  height: "90vh",
};

//custom map style
const options = {
  styles: MapStyle,
  //ignore default map style
  disableDefaultUI: true,
  clickableIcon: false,
  zoomControl: true,
};

//initial map position
const center = {
  lat: 49.275697,
  lng: -123.0871087,
};

const Map = (props) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  //LoadScript:Loads the Google Maps API script
  //GoogleMap:The map component inside which all other components render
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        options={options}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {props.children}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
