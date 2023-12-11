import React from "react";

import icon from "../../assets/images/icon.svg";

const CarInfo = ({
  onClick,
  id,
  year,
  make,
  model,
  type,
  image,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  return (
    <div>
      <img src={image} alt={model} />

      <div>
        <p>{make}</p>
        <p>{model},</p>
        <p>{year}</p>
      </div>

      <div>
        <span>{address}</span>
        <svg>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span>Id: {id}</span>
        <svg>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span>Year: {year}</span>
        <svg>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span>Type: {type}</span>
        <svg>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span>Fuel Consumption: {fuelConsumption}</span>
        <svg>
          <use href={`${icon}#icon-Vector-4`} />
        </svg>
        <span>Engine size: {engineSize}</span>
      </div>
      <p>{description}</p>
      <p>Accessories and functionalities:</p>
      <div>
        <span>{accessories}</span>
        <span>{functionalities}</span>
      </div>
      <p>Rental Conditions:</p>
      <div>
        <p>Minimum age: {rentalConditions}</p>
        <p>Mileage: {mileage}</p>
        <p>Price: {rentalPrice}</p>
      </div>
      <a href="tel:+380730000000">Rental car</a>
    </div>
  );
};

export default CarInfo;
