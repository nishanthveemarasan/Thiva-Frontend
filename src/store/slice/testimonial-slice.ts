import { testimonialData, TestimonialStoreData } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTestimonialData } from "../reducer/actionReducer";

const intitalState: TestimonialStoreData = { 
    data:[],
    loading: false,
    error: false
}

const testimonialSlice = createSlice({
    name: "testimonial",
    initialState: intitalState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTestimonialData.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchTestimonialData.fulfilled, (state, action: PayloadAction<testimonialData[]>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(fetchTestimonialData.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export default testimonialSlice;
