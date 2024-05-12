import React from "react";
import useHomePageVM from "./vm";
import MediaCard from "../../shared-components/Card";
import { useThemeContext } from "../Context";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
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

const dummy = [
  {
    name: "Republic of Moldova",
    population: 2617820,
    region: "Europe",
    capital: ["Chișinău"],
    flags: `https://flagcdn.com/w320/md.png`,
  },
  {
    name: "United States of America",
    population: 329484123,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: `https://flagcdn.com/w320/md.png`,
  },
  {
    name: "Republic of Moldova",
    population: 2617820,
    region: "Europe",
    capital: ["Chișinău"],
    flags: `https://flagcdn.com/w320/md.png`,
  },
  {
    name: "United States of America",
    population: 329484123,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: `https://flagcdn.com/w320/md.png`,
  },
  {
    name: "Republic of Moldova",
    population: 2617820,
    region: "Europe",
    capital: ["Chișinău"],
    flags: `https://flagcdn.com/w320/md.png`,
  },
  {
    name: "United States of America",
    population: 329484123,
    region: "Americas",
    capital: ["Washington, D.C."],
    flags: `https://flagcdn.com/w320/md.png`,
  },
];

const HomePage = () => {
  const { countries, handleChange, region } = useHomePageVM();
  const { theme } = useThemeContext();
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
        {dummy.map((country) => (
          <div key={country.name}>
            <MediaCard {...country} />
          </div>
        ))}
      </Container>
    </Root>
  );
};

export default HomePage;
