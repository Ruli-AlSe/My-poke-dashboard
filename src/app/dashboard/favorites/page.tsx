import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  describe: "Favorite pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl my-2">
        <small className="text-blue-500">Global state</small> Favorite pokemons
      </span>
      {/* <PokemonGrid pokemons={pokemons} /> */}
    </div>
  );
}
