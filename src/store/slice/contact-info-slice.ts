import { contactDetails } from "@/types/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const intitalState: {data: contactDetails|null} = { 
    data:null,
}

const contactInfoSlice = createSlice({
    name: "contact",
    initialState: intitalState,
    reducers: {
        addContactData: (state, action: PayloadAction<contactDetails>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
});

export default contactInfoSlice;
