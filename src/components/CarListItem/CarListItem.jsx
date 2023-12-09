import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selector";
import { addToFavorite, deleteFromFavorite } from "../../redux/operation";
import { nanoid } from "nanoid";

export const CarListItem = ({ advert, toggleModal }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorite.some((favorite) => favorite.id === advert.id));
  }, [favorite, advert.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite({ id: advert.id }));
    } else {
      dispatch(addToFavorite(advert));
      setIsFavorite(true);
    }
  };
  return (
    <li key={nanoid()}>
      <div>
        <img src={advert.img} alt={advert.model} />
      </div>
      <div onClick={toggleFavorite}></div>
      <div>
        <span>{advert.address}</span>
        <span>{advert.rentalCompany}</span>
        <span>{advert.type}</span>
        <span>{advert.model}</span>
        <span>{advert.id}</span>
        <span>{advert.functionalities}</span>
      </div>
      <button type="button" onClick={(e) => toggleModal(advert)(e)}>
        Learn more
      </button>
    </li>
  );
};
