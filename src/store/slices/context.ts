import { createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../../models/calls.types";

interface Context {
  character_user_state: CharacterType[]; // Cambiado a un arreglo de personajes
}

const initialState: Context = {
  character_user_state: [], // Estado inicial como arreglo vacío
};

export const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    // Acción para establecer múltiples personajes
    setCharacterGlobalInfo: (state, action) => {
      state.character_user_state = action.payload;
    },
    // Acción para agregar un solo personaje al arreglo
    addCharacter: (state, action) => {
      state.character_user_state.push(action.payload);
    },
  },
});

export const { setCharacterGlobalInfo, addCharacter } = contextSlice.actions;
export default contextSlice.reducer;
