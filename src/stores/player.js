import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  //   bu current dediğimiz şey aslında

  // {
  //     id: 5,
  //     title: "Felsefenin Kısa Tarihi",
  //     description: "Utku",
  //     image: "https://i.scdn.co/image/ab67656300005f1f8686a30a366968334160c96f",
  //     type: "podcast",
  //     src: "	https://cdn.freesound.org/previews/646/646395_12295155-lq.mp3",
  //   },
  // bu objeyi temsil ediyor !!
  controls: false,
  playing: false,
  sidebar: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying, setSidebar } =
  playerSlice.actions;

export default playerSlice.reducer;
