import { useDispatch } from "react-redux";
import { CarList } from "../../components/CarList/CarList";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operation";

//
const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <title>Contacts</title>

      <CarList />
    </div>
  );
};
export default CatalogPage;
