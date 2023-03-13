import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import PropTypes from "prop-types";

import BackgroundImage from "../components/ui/BackgroundImage";
import CardsContainer from "../components/ui/CardComponents/CardsContainer";
import SmallCard from "../components/ui/CardComponents/SmallCard";
import Loader from "../components/ui/Loader";
import Error from "./errors/Error";

function Home({ searchTerm }) {
  const [page, setPage] = useState(1);
  const limit = 100;
  const {
    data: pokemonData,
    isLoading,
    isError,
  } = useQuery(["pokemon", searchTerm, page], () =>
    searchTerm
      ? Axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        ).then((res) => res.data)
      : Axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (page - 1) * limit
          }&limit=${limit}`
        ).then((res) => {
          const { results } = res.data;
          const requests = results.map((result) => Axios.get(result.url));
          return Promise.all(requests).then((pokemonResponses) =>
            pokemonResponses.map((pokemonRes) => pokemonRes.data)
          );
        })
  );

  function hasHomeSprite(data) {
    if (data?.id >= 906 && data?.id <= 1008) {
      return false;
    } else {
      return true;
    }
  }

  function isPokemonAvailable(data) {
    if (data?.id >= 1009) {
      return false;
    } else {
      return true;
    }
  }

  function homeSprite(data) {
    return data.sprites.other.home.front_default;
  }

  function artworkSprite(data) {
    return data.sprites.other["official-artwork"]["front_default"];
  }

  function handlePrevClick() {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function handleNextClick() {
    setPage((prevPage) => prevPage + 1);
  }

  if (isLoading) {
    return (
      <BackgroundImage>
        <Loader></Loader>
      </BackgroundImage>
    );
  } else if (isError) {
    return (
      <BackgroundImage>
        <Error />
      </BackgroundImage>
    );
  } else if (searchTerm) {
    let imageValue;

    if (!isPokemonAvailable(pokemonData)) {
      return (
        <BackgroundImage>
          <Error />
        </BackgroundImage>
      );
    }

    if (hasHomeSprite(pokemonData)) {
      imageValue = homeSprite(pokemonData);
    } else {
      imageValue = artworkSprite(pokemonData);
    }

    return (
      <BackgroundImage>
        <CardsContainer>
          <SmallCard
            height={pokemonData.height}
            id={pokemonData.id}
            image={imageValue}
            key={pokemonData.id}
            name={pokemonData.species.name}
            weight={pokemonData.weight}
          />
        </CardsContainer>
      </BackgroundImage>
    );
  } else {
    const startId = (page - 1) * limit + 1;

    console.log(pokemonData.length);

    return (
      <BackgroundImage>
        <div className="flex justify-center items-center mt-4">
          <button
            className={` bg-purpleTheme hover:bg-yellowTheme text-white font-bold py-2 px-4 rounded mr-2 ${
              page === 1 ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevClick}
            disabled={page === 1}
          >
            Prev
          </button>
          <h1>{page}/11</h1>
          <button
            className={` bg-purpleTheme hover:bg-yellowTheme text-white font-bold py-2 px-4 ml-2 rounded ${
              page === 11 ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={handleNextClick}
            disabled={page === 11}
          >
            Next
          </button>
        </div>
        <CardsContainer>
          {Array.isArray(pokemonData) &&
            pokemonData.map((data) => {
              let imageValue;

              if (!isPokemonAvailable(data)) {
                return null;
              }

              if (hasHomeSprite(data)) {
                imageValue = homeSprite(data);
              } else {
                imageValue = artworkSprite(data);
              }

              return (
                <SmallCard
                  height={data.height}
                  id={data.id}
                  image={imageValue}
                  key={data.id}
                  name={data.species.name}
                  weight={data.weight}
                />
              );
            })}
        </CardsContainer>
      </BackgroundImage>
    );
  }
}

Home.propTypes = {
  searchTerm: PropTypes.string,
};

export default Home;
