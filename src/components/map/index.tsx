import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { Icon } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

type MapProps = {
  location: Coords;
  address: string;
};
export const Map: React.FC<MapProps> = ({ location, address }) => {
  return (
    <div style={{ height: 400, width: 400, overflow: "hidden" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA-hwdQ7e6JkcWv6GYFMP0WcVIu2_TE8Zw",
        }}
        defaultCenter={location}
        defaultZoom={10}
        style={{
          height: 400,
          width: 400,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <Marker lat={props.lat} lng={props.lng}} /> */}

        <LocationOn color="error" />
      </GoogleMapReact>
    </div>
  );
};
