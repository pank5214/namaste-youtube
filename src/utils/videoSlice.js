import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    channelId: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
    clearChannelId: (state) => {
      state.channelId = null;
    },
  },
});

export const { setChannelId, clearChannelId } = videoSlice.actions;
export default videoSlice.reducer;
