import { nanoid } from "nanoid";
import { CarListItem } from "../CarListItem/CarListItem";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selector";
import { selectFilterList } from "../../redux/selector";

export const CarList = ({ toggleModal }) => {
  const cars = useSelector(selectCars);
  const filterList = useSelector(selectFilterList);

  const getFilteredCars = () => {
    let filteredCars = cars.filter((car) => car.make.includes(filterList));
    return filteredCars;
  };

  const visibleCars = getFilteredCars();
  return (
    <div>
      <ul>
        {visibleCars.map((car) => {
          return (
            <CarListItem
              advert={car}
              toggleCarModal={toggleModal}
              key={nanoid()}
            />
          );
        })}
      </ul>
    </div>
  );
};
