import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import BackgroundImage from "../components/ui/BackgroundImage";
import CardsContainer from "../components/ui/CardComponents/CardsContainer";
import SmallCard from "../components/ui/CardComponents/SmallCard";
import Loader from "../components/ui/Loader";

function Home() {
  const {
    data: pokemonData,
    isLoading,
    isError,
  } = useQuery(["pokemon"], () =>
    Axios.all(
      Array.from({ length: 100 }, (_, index) =>
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(
          (res) => res.data
        )
      )
    )
  );

  if (isLoading) {
    return (
      <BackgroundImage>
        <Loader></Loader>
      </BackgroundImage>
    );
  } else if (isError) {
    return (
      <BackgroundImage>
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-4xl text-red-500">Oops. Didn't catch Pokemon.</h1>
        </div>
      </BackgroundImage>
    );
  } else {
    return (
      <BackgroundImage>
        <CardsContainer>
          {pokemonData.map((data) => (
            <SmallCard
              height={data.height}
              id={data.id}
              image={data.sprites.other.home.front_default}
              key={data.id}
              name={data.species.name}
              weight={data.weight}
            ></SmallCard>
          ))}
        </CardsContainer>
      </BackgroundImage>
    );
  }
}

export default Home;

//   const divs = [];

//   for (let i = 0; i < 20; i++) {
//     divs.push(
//       <div key={i} class="border border-black">
//         <h1 className="text-9xl">Hello, world!</h1>
//       </div>
//     );
//   }

// const {
//     data: pokemonData,
//     isLoading,
//     isError,
//   } = useQuery(["pokemon"], () =>
//     Axios.all(
//       Array.from({ length: 25 }, (_, index) =>
//         Axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(
//           (res) => res.data
//         )
//       )
//     )
//   );

//   if (isError) {
//     return <h1>Sorry, there was an error.</h1>;
//   }

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div>
//   {pokemonData.map((data) => (
//     <div key={data.id}>
//       <h1 className="font-bold text-xl">
//         {data?.species.name.charAt(0).toUpperCase() +
//           data?.species.name.slice(1)}
//       </h1>
//       <img
//         src={data?.sprites.other.home.front_default}
//         alt={data?.species.name}
//       ></img>
//     </div>
//   ))}
//     </div>
//   );
