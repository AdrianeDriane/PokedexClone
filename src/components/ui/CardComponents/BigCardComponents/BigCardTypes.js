import { PropTypes } from "prop-types";
import styles from "./BigCardTypes.module.css";

function BigCardTypes({ types }) {
  return (
    <div className="mt-4">
      <p className="text-2xl text-purpleTheme text-start mb-2">Type</p>
      <div className="flex space-x-2 justify-start">
        {types.map((type, index) => (
          <div
            key={index}
            className={`rounded-3xl p-2 ${styles[`bg-${type.type.name}`]}`}
            style={{ width: "120px", height: "40px" }}
          >
            <p className="capitalize">{type.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

BigCardTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BigCardTypes;
