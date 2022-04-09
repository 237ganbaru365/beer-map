import React, { useContext } from "react";
import { InfoWindow } from "@react-google-maps/api";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import userContext from "../../store/user-context";
import classes from "./MapModal.module.css";

const MapModal = (props) => {
  const { addFavoriteHandler, favoriteList, removeFavoriteHandler } =
    useContext(userContext);

  let storedBrewing = favoriteList.find((el) => el.id === props.store.id);

  let favoriteListDisabled = storedBrewing ? true : false;

  return (
    <InfoWindow
      position={{
        lat: props.geolocation._lat,
        lng: props.geolocation._long,
      }}
      onCloseClick={props.onCloseClick}
      options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
    >
      <div className={classes.wrapper}>
        <h2>
          <span role="img" aria-label="bear">
            🍺{" "}
          </span>
          {props.name}
        </h2>
        <img src={props.img} alt="beer" />
        <p className={classes.desc}>{props.description}</p>
        <div className={classes.fav}>
          {!favoriteListDisabled && (
            <FavoriteBorderIcon
              sx={{ color: "#ffe251", fontSize: 30 }}
              onClick={() => addFavoriteHandler(props.store)}
            />
          )}
          {favoriteListDisabled && (
            <FavoriteIcon
              sx={{ color: "#ffe251", fontSize: 30 }}
              onClick={() => {
                removeFavoriteHandler(props.store.id);
              }}
            />
          )}
        </div>
      </div>
    </InfoWindow>
  );
};

export default MapModal;
