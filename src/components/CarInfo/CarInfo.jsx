import React from "react";
const CarInfo = ({ advert, toggleModal }) => {
  return (
    <div>
      <img src={advert.img} alt={advert.model} />
      <div>
        <p>{advert.make}</p>
        <p>{advert.model},</p>
        <p>{advert.year}</p>
      </div>

      <div>
        <span>{advert.address}</span>
        <span>{advert.id}</span>
        <span>{advert.year}</span>
        <span>Type:{advert.type}</span>
        <span>Fuel Consumption:{advert.fuelConsumption}</span>
        <span>Engine Size:{advert.engineSize}</span>
        <span>{advert.address}</span>
      </div>
      <p>{advert.description}</p>
      <p>Accessories and functionalities:</p>
      <div>
        <span>{advert.accessories}</span>
        <span>{advert.functionalities}</span>
      </div>
      <p>Rental Conditions:</p>
      <div>
        <p>Minimum age : {advert.rentalConditions}</p>
        <p>Mileage: {advert.mileage}</p>
        <p>Price: {advert.rentalPrice}</p>
      </div>
      <a href="tel:+380730000000">Rental car</a>
    </div>
  );
};
export default CarInfo;
