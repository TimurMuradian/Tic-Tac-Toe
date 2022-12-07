import PropTypes from "prop-types";

const Square = ({ value, onClick, isWinline }) => {
  let className = "square"; 
  if (isWinline) {
    className += " square-win";
  }
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );

};

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]).isRequired,
  onClick: PropTypes.func.isRequired,
  isWinline: PropTypes.bool,
};

export default Square;
