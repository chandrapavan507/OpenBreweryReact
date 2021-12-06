import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { BreweryType } from "../../util/types";
import { useLocation, useNavigate } from "react-router";

type BreweryCardProps = { data: BreweryType };

const BreweryCard: React.FC<BreweryCardProps> = ({ data }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const goToBrewery = () => {
    navigate(`/${data.id}`);
  };

  return (
    <Card variant="outlined" sx={{ width: 300 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          secondary
        </Typography> */}
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.brewery_type}
        </Typography>
        <Typography variant="body2">
          {data.street}
          <br /> {data.city}
          <br /> {data.state}
          <br /> {data.postal_code}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={data.website_url} target="_blank" size="small">
          Website
        </Button>
        {pathname === "/" ? (
          <Button onClick={goToBrewery} size="small">
            Learn More
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default BreweryCard;
