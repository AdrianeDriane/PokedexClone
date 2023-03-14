import { PropTypes } from "prop-types";

function Backdrop({ closeBigCard }) {
  return (
    <div
      className="fixed z-10 bg-black bg-opacity-75 w-full h-screen top-0 left-0"
      onClick={closeBigCard}
    />
  );
}

Backdrop.propTypes = {
  closeBigCard: PropTypes.func.isRequired,
};

export default Backdrop;
