import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { BreweryType } from "../../util/types";
import BreweryCard from "../brewery-card";
import { API_URL } from "../../util/constants";
import "./style.scss";
import { CityContext } from "../../App";

const BrewList = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const { city } = useContext(CityContext);

  useEffect(() => {
    fetch(API_URL + "?by_city=" + encodeURI(city.toLowerCase())).then((res) => {
      res.json().then((data) => {
        setBreweries(data);
      });
    });
  }, [city]);

  return (
    <div className="App">
      <Grid container spacing={2} padding={2}>
        {breweries.map((b) => (
          <Grid item key={b.id}>
            <BreweryCard data={b} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BrewList;
