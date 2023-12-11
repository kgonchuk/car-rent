import React, { useEffect, useState } from "react";
import makes from "../../helpers/make.json";
import css from "./FavoriteList.module.css";
import SelectFavorite from "../../helpers/SelectFavorite/SelectFavorite";
import MySelectMakeFav from "../../helpers/SelectBrandFavorite/SelectBrandFavorite";
import { useDispatch, useSelector } from "react-redux";
import { filtersFavorite } from "../../redux/selector";
import { resetFiltersFavorite } from "../../redux/filterSlice";

const FavoriteList = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector(filtersFavorite);

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
    dispatch(resetFiltersFavorite());
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={css.filterForm}>
        <div className={css.select_wrapper}>
          <ladel className={css.lable_title}>Car brand</ladel>
          <MySelectMakeFav
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            makes={makes}
          />
        </div>
        <div className={css.select_wrapper}>
          <ladel className={css.lable_title}>Price/ 1 hour</ladel>

          <SelectFavorite
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </div>

        <div className={css.select_wrapper}>
          <ladel className={css.lable_title}>Сar mileage / km</ladel>

          <div>
            <div className={css.input_wrapper}>
              <div className={css.inputName}>From</div>
              <input
                className={css.left_input}
                type="number"
                name="minMileage"
                value={minMileage}
                onClick={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMinMileage(value);
                }}
              />
            </div>
            <div className={css.input_wrapper}>
              <div className={css.inputName}>To</div>
              <input
                className={css.rigth_input}
                type="number"
                value={maxMileage}
                onClick={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMaxMileage(value);
                }}
              />
            </div>
          </div>
        </div>
        <button className={css.btn_Search} type="submit">
          Search
        </button>
        <button className={css.closeBtn} onClick={clearFilters}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default FavoriteList;
