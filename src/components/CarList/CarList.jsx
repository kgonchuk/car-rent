import React, { useEffect, useState } from "react";
import CarListItem from "../CarListItem/CarListItem";
import LoadMore from "../../helpers/LoadMore/LoadMore";
import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onNextPage } from "../../redux/carSlice";
import { setAdverts, setAllAdverts } from "../../redux/operation";
import LoaderSpiner from "../LoaderSpiner/LoaderSpiner";
import {
  selectAdverts,
  selectAllAdverts,
  selectFilters,
  selectIsLoading,
  selectPage,
} from "../../redux/selector";

const CarList = () => {
  const [isBnt, setIsBtn] = useState(true);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const filters = useSelector(selectFilters);
  const allAdverts = useSelector(selectAllAdverts);

  const isFilterOn = Boolean(
    filters.selectedMake ||
      filters.selectedPrice ||
      filters.minMileage ||
      filters.maxMileage
  );

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(setAllAdverts());
      dispatch(setAdverts(page));
    }
  }, [adverts.length, dispatch, page]);

  useEffect(() => {
    if (page + 1 > 4 || isFilterOn) {
      setIsBtn(false);
    } else if (!isFilterOn) {
      setIsBtn(true);
    }
  }, [isFilterOn, page]);

  const onFindMore = () => {
    dispatch(onNextPage());
    dispatch(setAdverts(page + 1));
  };

  const filteredAdverts = allAdverts.filter((adverts) => {
    if (filters.selectedMake && adverts.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <>
      {adverts && (
        <>
          {filteredAdverts.length > 0 ? (
            <ul className={css.advertsList}>
              {(isFilterOn ? filteredAdverts : adverts).map((advert) => {
                return <CarListItem key={advert.id} advert={advert} />;
              })}
            </ul>
          ) : (
            <>
              {!isLoading && (
                <div className={css.noMatching}>
                  Sorry, no matching adverts found
                </div>
              )}
            </>
          )}
          {isLoading ? (
            <LoaderSpiner />
          ) : (
            <>{isBnt && <LoadMore onFindMore={onFindMore} />}</>
          )}
        </>
      )}
    </>
  );
};
export default CarList;
