import { createSlice } from "@reduxjs/toolkit"; // pour mettre un reducer plus facilement

const initialState = { 
  preview: true // permet d'afficher la page preview enn arrivant sur la page
}

export const preview = createSlice({
  name: "preview", //  nom du reducer
  initialState, // state initial = celui qu'on vient de créer
  reducers: { // différents cas de reducer
    togglePreview: (state) => {
      state.preview = !state.preview // permet de toggle le on/off show preview
    },
    hidePreview: (state) => {
      state.preview = false // permet de faire que preview = false pour cacher le preview
    }
  }
})

export const {togglePreview, hidePreview} = preview.actions
export default preview.reducer