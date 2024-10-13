import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  // "1": { id: "1", name: "bulbasaur" },
  // "9": { id: "9", name: "blastoise" },
  // "38": { id: "38", name: "ninetales" },
  // ...getInitialState(),
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];

        return;
      }

      state.favorites[id] = pokemon;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
