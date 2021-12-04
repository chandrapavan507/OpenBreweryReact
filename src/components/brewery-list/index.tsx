import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BreweryType } from "../../util/types";
import BreweryCard from "../brewery-card";
import "./style.scss";

const BrewList = () => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries").then((res) => {
      res.json().then((data) => {
        setBreweries(data);
      });
    });
  }, []);

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
