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

const HomePage = () => {
  const { countries, handleChange, region } = useHomePageVM();
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
        {countries.map((country) => (
          // <div key={country.name}>
          <MediaCard key={country.name} {...country} />
          // </div>
        ))}
      </Container>
    </Root>
  );
};

export default HomePage;
