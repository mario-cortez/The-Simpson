import { createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../../models/calls.types";

interface Context {
  character_user_state: CharacterType[];
}

const initialState: Context = {
  character_user_state: [],
};

export const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    setCharacterGlobalInfo: (state, action) => {
      state.character_user_state = action.payload;
    },

    addCharacter: (state, action) => {
      state.character_user_state.push(action.payload);
    },
  },
});

export const { setCharacterGlobalInfo, addCharacter } = contextSlice.actions;
export default contextSlice.reducer;
