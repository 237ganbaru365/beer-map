import React, { useContext, useState } from "react";
import { Marker } from "@react-google-maps/api";

import Map from "../Map/Map";
import MapModal from "../Map/MapModal";
import userContext from "../../store/user-context";

const FavoriteMap = () => {
  const [selected, setSelected] = useState(null);

  const { favoriteList } = useContext(userContext);

  const selectedHandler = () => {
    setSelected(null);
  };

  return (
    <Map>
      {favoriteList.map((data) => (
        <Marker
          key={data.id}
          position={{
            lat: data.geolocation._lat,
            lng: data.geolocation._long,
          }}
          onClick={() => {
            setSelected(data);
          }}
          icon={{
            url: "/favorite.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      ))}
      {selected ? (
        <MapModal
          name={selected.name}
          img={selected.img}
          description={selected.description}
          geolocation={selected.geolocation}
          onCloseClick={selectedHandler}
        />
      ) : null}
    </Map>
  );
};

export default FavoriteMap;
