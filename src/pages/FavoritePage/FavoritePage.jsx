import React from "react";

import CarListItem from "../../components/CarListItem/CarListItem";
import { useSelector, useDispatch } from "react-redux";
import { setFiltersFavorite } from "../../redux/filterSlice";

import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { filtersFavorite, selectFavorites } from "../../redux/selector";
import css from "./FavoritePage.module.css";
import css_ from "../../components/CarList/CarList.module.css";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const filters = useSelector(filtersFavorite);

  const handleFilterChange = (filters) => {
    dispatch(setFiltersFavorite(filters));
  };

  const filteredFavorites = favorites.filter((advert) => {
    if (filters.selectedMake && advert.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(advert.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && advert.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && advert.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <form className={css.form_wrapper}>
      <div className={css.select_wrapper_form}>
        {filteredFavorites.length > 0 ? (
          <div className={css_.advertsList}>
            {filteredFavorites.map((advert) => (
              <CarListItem key={advert.id} advert={advert} />
            ))}
          </div>
        ) : (
          <div className={css_.noMatching}>
            Sorry, no matching favorites found
          </div>
        )}
      </div>
      <FavoriteList onFilterChange={handleFilterChange} />
    </form>
  );
};

export default FavouritePage;
