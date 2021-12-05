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

  useEffect(() => {
    fetch(API_URL + `/${params.id}`).then((resp) => {
      resp.json().then((data: BreweryType) => {
        setBrewery(data);
      });
    });
  }, [params.id]);

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Grid container padding={2} gap={2}>
        <Grid>
          <Map
            location={{
              lat: parseFloat(brewery.latitude),
              lng: parseFloat(brewery.longitude),
            }}
          ></Map>
        </Grid>
        <Grid>
          <BreweryCard data={brewery} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Brewery;
