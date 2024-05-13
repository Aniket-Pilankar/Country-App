import { ChangeEvent, useEffect, useState } from "react";
import { fetchCountries } from "../../redux/country/thunk-api";
import { useAppDispatch } from "../../redux/types";
import { useSelector } from "react-redux";
import { selectCountries } from "../../redux/country/selector";
import { SelectChangeEvent } from "@mui/material";

export default function useHomePageVM() {
  const dispatch = useAppDispatch();
  const countries = useSelector(selectCountries);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(
    function initPage() {
      dispatch(fetchCountries());
    },
    [dispatch]
  );

  return {
    countries,
    handleChange,
    region,
    handleSearch,
    search,
  };
}
