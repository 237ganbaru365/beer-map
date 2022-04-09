import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Marker } from "@react-google-maps/api";
import { db } from "../../firebase";
import Map from "./Map";
import MapModal from "./MapModal";

const MapHome = () => {
  const [selected, setSelected] = useState(null);

  //get data from firestore
  const [stores, setStores] = useState([]);

  //初回レンダリング時のみデータを取得
  useEffect(() => {
    const getData = async () => {
      const storeData = await getDocs(collection(db, "store"));
      setStores(storeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  const selectedHandler = () => {
    setSelected(null);
  };

  return (
    <Map>
      {stores.map((data) => (
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
            url: "/beer.svg",
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 20),
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
          store={selected}
        />
      ) : null}
    </Map>
  );
};

export default MapHome;
