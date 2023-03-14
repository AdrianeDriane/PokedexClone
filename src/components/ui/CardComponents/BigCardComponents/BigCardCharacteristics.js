import { PropTypes } from "prop-types";

function BigCardCharacteristics({ abilities, height, image, weight }) {
  return (
    <div className=" container flex flex-col items-center justify-start  xl:flex-row">
      <img src={image} alt="Pokemon" className="h-64"></img>

      <div className=" p-4 w-full h-full ">
        <div className=" h-full bg-white rounded-3xl flex justify-start ">
          <div className=" h-full w-1/2">
            <div className=" h-1/2 flex flex-col justify-center p-8 ">
              <p className="text-2xl text-purpleTheme text-center">Weight:</p>
              <p className="text-2xl text-darkYellowFontColor text-center">
                {weight}
              </p>
            </div>

            <div className=" h-1/2 flex flex-col justify-center p-8 pt-0 ">
              <p className="text-2xl text-purpleTheme  text-center">Height:</p>
              <p className="text-2xl text-darkYellowFontColor  text-center">
                {height}
              </p>
            </div>
          </div>
          <div className=" h-full w-1/2 p-8  pl-0 ">
            <p className=" h-1/4 text-purpleTheme text-2xl text-center mb-1">
              Abilities:
            </p>
            <div className="flex flex-col justify-start">
              {abilities.map((ability, index) => (
                <p
                  key={index}
                  className="text-2xl text-darkYellowFontColor  text-center capitalize "
                >
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BigCardCharacteristics.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export default BigCardCharacteristics;
