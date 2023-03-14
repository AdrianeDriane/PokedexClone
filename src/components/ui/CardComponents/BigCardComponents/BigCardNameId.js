import { PropTypes } from "prop-types";

function BigCardNameId({ name, id }) {
  return (
    <div className=" flex items-center justify-center">
      <h1 className="text-5xl capitalize font-bold text-gray-800">{name}</h1>
      <h1 className="text-3xl capitalize ml-4 text-gray-800">
        #{id.toString().padStart(4, "0")}
      </h1>
    </div>
  );
}

BigCardNameId.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BigCardNameId;
