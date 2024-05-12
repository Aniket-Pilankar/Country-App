import { useEffect } from "react";
import { fetchCountries } from "../../redux/country/thunk-api";
import { useAppDispatch } from "../../redux/types";
import { useSelector } from "react-redux";
import { selectCountries } from "../../redux/country/selector";

export default function useHomePageVM() {
  const dispatch = useAppDispatch();
  const countries = useSelector(selectCountries);
  console.log("countries:", countries);

  useEffect(
    function initPage() {
      dispatch(fetchCountries());
    },
    [dispatch]
  );

  return {
    countries,
  };
}
