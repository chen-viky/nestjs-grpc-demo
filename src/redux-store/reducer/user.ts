import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { request } from "../../services";
interface InitialState {
  name: string;
}

const initialState: InitialState = {
  name: "defaultName",
};

export const login = createAsyncThunk("login", async () => {
  const res = await request<{ name: string }>({
    url: "/login",
  });
  return res.data;
});

export const userSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload) {
        state.name = payload.name;
      }
    });
    // builder.addCase()
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
