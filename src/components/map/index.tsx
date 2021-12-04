import React from "react";
import GoogleMapReact, { Coords } from "google-map-react";

type MapProps = {
  location: Coords;
};
export const Map: React.FC<MapProps> = ({ location }) => {
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
        {/* <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            /> */}
      </GoogleMapReact>
    </div>
  );
};
