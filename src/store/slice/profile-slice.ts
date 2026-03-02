import { profileData, profileStoreData } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../reducer/actionReducer";

const intitalState: profileStoreData = { 
    data:null,
    loading: false,
    error: false
}

const profileSlice = createSlice({
    name: "profile",
    initialState: intitalState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfileData.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<profileData>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(fetchProfileData.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export default profileSlice;
