import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Country } from "../redux/country/types";
import { Link } from "react-router-dom";

export default function MediaCard({
  capital,
  name,
  population,
  region,
  flags,
}: Country) {
  return (
    <Card
      component={Link}
      to={`/${name}`}
      sx={{ backgroundColor: "inherit", textDecoration: "none" }}
    >
      <CardMedia sx={{ height: 200 }} image={flags} title="green iguana" />
      <CardContent sx={{ height: 200 }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        {/* <Typography variant="body1" color="text.secondary"> */}
        <Typography variant="body2" fontWeight="500">
          Population:{" "}
          <Typography variant="body2" component="span" fontWeight="300">
            {population}
          </Typography>
        </Typography>
        <Typography variant="body2" fontWeight="500">
          Region:{" "}
          <Typography variant="body2" component="span" fontWeight="300">
            {region}
          </Typography>
        </Typography>
        <Typography variant="body2" fontWeight="500">
          Capital:{" "}
          <Typography variant="body2" component="span" fontWeight="300">
            {capital}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
