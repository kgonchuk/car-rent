import CarList from "../../components/CarList/CarList";
import Filter from "../../components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/filterSlice";
import { selectAdverts } from "../../redux/selector";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };

  return (
    <div>
      <Filter adverts={adverts} onFilterChange={handleFilterChange} />
      <CarList />
    </div>
  );
};

export default CatalogPage;
