import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BreweryType } from "../../util/types";
import BreweryCard from "../brewery-card";
import { Map } from "../map";
import "./style.scss";
import { API_URL } from "../../util/constants";

const Brewery = () => {
  const params = useParams();
  const [brewery, setBrewery] = useState<BreweryType>();
  const [location, setLocation] = useState<any>();
  useEffect(() => {
    fetch(API_URL + `/${params.id}`).then((resp) => {
      resp.json().then((data: BreweryType) => {
        setBrewery(data);
      });
    });
  }, [params.id]);

  useEffect(() => {
    if (brewery?.latitude && brewery?.longitude) {
      setLocation({
        lat: parseFloat(brewery.latitude),
        lng: parseFloat(brewery.longitude),
      });
    }
  }, [brewery]);

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Grid container padding={2} gap={2}>
        <Grid>
          {location ? (
            <Map location={location} address={brewery.name} />
          ) : (
            "No Location for this Brewery"
          )}
        </Grid>
        <Grid>
          <BreweryCard data={brewery} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Brewery;
