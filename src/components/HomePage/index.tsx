import React from "react";
import useHomePageVM from "./vm";
import MediaCard from "../../shared-components/Card";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  ActionWrapper,
  Container,
  Root,
  SearchField,
  selectCompClasses,
} from "./styles";
import { options } from "../../utils/constants";
import clsx from "clsx";

const HomePage = () => {
  const { countries, handleChange, region, handleSearch, search } =
    useHomePageVM();
  return (
    <Root>
      <ActionWrapper>
        <SearchField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          placeholder="Search for a country.."
          value={search}
          onChange={handleSearch}
        />
        <FormControl className={clsx(selectCompClasses.root)}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={region}
            onChange={handleChange}
            autoWidth
            label="region"
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ActionWrapper>
      <Container>
        {countries
          .filter((country) =>
            search === ""
              ? country
              : country.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((country) =>
            region === ""
              ? country
              : country.region.toLowerCase().includes(region.toLowerCase())
          )
          .map((country) => (
            <MediaCard key={country.name} {...country} />
          ))}
      </Container>
    </Root>
  );
};

export default HomePage;
