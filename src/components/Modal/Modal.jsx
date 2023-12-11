import css from "./Modal.module.css";
import closeBtn from "../../assets/images/closeBtn.svg";

const Modal = ({ closeModal, advert }) => {
  const address = advert.address.split(", ");
  const conditions = advert.rentalConditions.split("\n");
  const city = address[address.length - 2];
  const country = address[address.length - 1];

  const handleOverlyClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className={css.overlay} onClick={handleOverlyClick}>
      <div className={css.modalContainer}>
        <button className={css.closeBtn} onClick={closeModal}>
          <img src={closeBtn} alt="close" width={14} height={14} />
        </button>

        <div>
          <div className={css.wrapperCar}>
            <img
              src={advert.img}
              alt="car"
              className={css.carImage}
              width={461}
              height={248}
            />
          </div>
        </div>

        <div className={css.carTitle}>
          <h2>
            {advert.make} <span> {advert.model}</span>, {advert.year}
          </h2>
        </div>

        <div className={css.carInfo}>
          {city}&ensp;|&ensp;{country}&ensp;|&ensp;Id: {advert.id}
          &ensp;|&ensp;Year: {advert.year}&ensp;|&ensp;Type: {advert.type}
        </div>

        <div className={css.carInfo}>
          Fuel Consumption: {advert.fuelConsumption}
          &ensp;|&ensp;Engine Size: {advert.engineSize}
        </div>

        <div className={css.carDescription}>{advert.description}</div>
        <div className={css.secondaryTitle}>
          Accessories and functionalities:
        </div>

        <div className={css.AccessoriesList}>
          {advert.functionalities.map((functionaliti) => {
            return <li> {functionaliti} | </li>;
          })}
        </div>
        <div className={css.secondaryTitle}>Rental Conditions: </div>

        <ul className={css.conditionList}>
          {conditions.map((condition, index) => {
            const characters = condition.split("");
            return (
              <li key={index}>
                {characters.map((char, charIndex) => {
                  const isDigit = /^\d+$/.test(char);
                  return (
                    <span
                      key={charIndex}
                      style={{
                        color: isDigit ? "#3470FF" : "#363535",
                        fontWeight: isDigit ? 600 : 400,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </li>
            );
          })}
          <li>
            Mileage:{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {Number(advert.mileage).toLocaleString("en")}
            </span>
          </li>
          <li>
            Price:{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {advert.rentalPrice}
            </span>
          </li>
        </ul>

        <button
          className={css.btnRentalCar}
          onClick={() => {
            window.location.href = "tel:+380730000000";
          }}
        >
          Rental car
        </button>
      </div>
      {/* overlayContainer */}
    </div>
  );
};
export default Modal;
