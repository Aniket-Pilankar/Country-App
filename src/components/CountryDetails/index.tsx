import React from "react";
import useCountryDetailsVM from "./vm";
import {
  Container,
  DetailWrapper,
  FooterDetailWrapper,
  ImageWrapper,
  Root,
  SubDetailWrapper,
  selectCompClasses,
} from "./styles";
import { Button, Chip, Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const CountryDetails = () => {
  const { country, handleClick } = useCountryDetailsVM();
  // console.log("country:", country);
  if (!country) return <h1>"No country matched"</h1>;
  return (
    <Root>
      <Button
        size="small"
        color="inherit"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ width: "fit-content", backgroundColor: "primary.main" }}
        onClick={handleClick}
      >
        Back
      </Button>
      <Container>
        <ImageWrapper className={`${selectCompClasses.imagewrapper}`}>
          <img src={country.flags} width={"100%"} height={"100%"} alt="" />
        </ImageWrapper>
        <DetailWrapper className={`${selectCompClasses.subdetails}`}>
          <Typography variant="h4" component="div">
            {country.name}
          </Typography>
          <SubDetailWrapper>
            <Stack>
              <Typography variant="body2" fontWeight="500">
                Native Name:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.naiveName}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Population:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.population}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Region:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.region}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Sub Region:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.subregion}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Capital:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.capital}
                </Typography>
              </Typography>
            </Stack>
            <Stack lineHeight={32}>
              <Typography variant="body2" fontWeight="500">
                Top Level Domain:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.tld.join(",")}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Currencies:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.currencies.join(",")}
                </Typography>
              </Typography>
              <Typography variant="body2" fontWeight="500">
                Languages:{" "}
                <Typography variant="body2" component="span" fontWeight="300">
                  {country.languages.join(",")}
                </Typography>
              </Typography>
            </Stack>
          </SubDetailWrapper>
          <FooterDetailWrapper>
            <Typography variant="body1" component="div">
              Border Countries:
            </Typography>
            <Stack direction="row" gap={1}>
              {country.borders.map((elem) => (
                <Chip
                  label={elem}
                  variant="outlined"
                  sx={{ borderRadius: "0" }}
                />
              ))}
            </Stack>
          </FooterDetailWrapper>
        </DetailWrapper>
      </Container>
    </Root>
  );
};

export default CountryDetails;
