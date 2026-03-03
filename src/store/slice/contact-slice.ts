import { contactDetails,  StoreData } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContactData } from "../reducer/actionReducer";

const intitalState: StoreData = { 
    data:null,
    loading: false,
    error: false,
}

const contactSlice = createSlice({
    name: "contact",
    initialState: intitalState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContactData.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchContactData.fulfilled, (state, action: PayloadAction<contactDetails>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(fetchContactData.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export default contactSlice;
