import { homeData, homeStoreData } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchHomeData } from "../reducer/actionReducer";

const intitalState: homeStoreData = { 
    data:null,
    loading: false,
    error: false
}

const homeSlice = createSlice({
    name: "home",
    initialState: intitalState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHomeData.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchHomeData.fulfilled, (state, action: PayloadAction<homeData>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(fetchHomeData.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export default homeSlice;
