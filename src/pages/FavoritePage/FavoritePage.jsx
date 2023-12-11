import { useSelector } from "react-redux";
import { totalFavoritesCars } from "../../redux/selector";
import { FavoritesList } from "../../components/FavoriteList/FavoriteList";

const Favorites = () => {
  const totalCars = useSelector(totalFavoritesCars);
  console.log(totalCars);

  return (
    <section className="pb-[100px] md:pt-[100px] md:max-w-[1280px] md:min-h-[calc(100vh-132px)] md:px-[16px] mx-auto">
      {totalCars > 0 ? (
        <FavoritesList />
      ) : (
        <div className="w-full h-full flex">
          <h2 className="m-auto text-center text-2xl text-darkFontColor dark:text-white">
            There are no cars in the Favorites List :(
          </h2>
        </div>
      )}
    </section>
  );
};

export default Favorites;
