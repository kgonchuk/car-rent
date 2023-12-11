import React, { useEffect, useState } from "react";
import makes from "../../helpers/make.json";
import css from "./Filter.module.css";
import SelectPrice from "../../helpers/SelectPrice/SelectPrice";
import SelectBrand from "../../helpers/SelectBrand/SelectBrand";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selector";
import { resetFilters } from "../../redux/filterSlice";
import { InputDiv, InputPl, InputLeft, InputRight } from "./Filter.styled";

const Filter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    setSelectedMake(filters.selectedMake);
    setSelectedPrice(filters.selectedPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);
  }, [
    filters.maxMileage,
    filters.minMileage,
    filters.selectedMake,
    filters.selectedPrice,
    filters.setMaxMileage,
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      minMileage,
      maxMileage,
    };

    onFilterChange(filters);
  };

  const clearFilters = (e) => {
    e.preventDefault();
    console.log("clear");
    dispatch(resetFilters());
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.filterForm}>
      <div className={css.select_wrapper}>
        <label className={css.label_title}>Car brand</label>
        <SelectBrand
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          makes={makes}
        />
      </div>

      <div className={css.select_wrapper}>
        <label className={css.label_title}>Price/ 1 hour</label>
        <SelectPrice
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>

      <div className={css.select_wrapper}>
        <label className={css.label_title}>Car mealege / km</label>

        <div>
          <div>
            <InputDiv>
              <InputPl>From</InputPl>
              <InputLeft
                type="number"
                value={minMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 1);
                  setMinMileage(value);
                }}
              />
            </InputDiv>
            <InputDiv>
              <InputPl>To</InputPl>
              <InputRight
                type="number"
                value={maxMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 1);
                  setMaxMileage(value);
                }}
              />
            </InputDiv>
          </div>
        </div>
      </div>
      <button type="submit" className={css.btn_Search}>
        Search
      </button>
      <button type="reset" onClick={clearFilters} className={css.closeBtn}>
        Reset
      </button>
    </form>
  );
};
export default Filter;
