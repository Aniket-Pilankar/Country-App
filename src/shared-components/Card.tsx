import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Country } from "../redux/country/types";

export default function MediaCard({
  capital,
  name,
  population,
  region,
  flags,
}: Country) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={flags} title="green iguana" />
      <CardContent>
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
