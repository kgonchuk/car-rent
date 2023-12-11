import css from "./LoadMore.module.css";

const LoadMore = ({ onFindMore }) => {
  return (
    <button className={css.btn} type="button" onClick={onFindMore}>
      Load More
    </button>
  );
};

export default LoadMore;
