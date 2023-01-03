import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 0,
};

export const fetchCount = createAsyncThunk("fetchCount", async () => {
  const num = await new Promise<number>((res, rej) => {
    setTimeout(() => {
      res(10);
    }, 3000);
  });
  return num;
});

export const counterSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<number | undefined>) => {
      if (payload) {
        state.count += payload;
      } else {
        state.count += 1;
      }
    },
    minus: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, () => {
        console.log("is fetchCount");
      })
      .addCase(fetchCount.fulfilled, (state, { payload }) => {
        if (payload) {
          state.count += payload;
        }
      });
    // builder.addCase()
  },
});

export const { add, minus } = counterSlice.actions;
export default counterSlice.reducer;
