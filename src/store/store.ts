import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slice/contact-slice";
import testimonialSlice from "./slice/testimonial-slice";
import serviceSlice from "./slice/service-slice";
import { profile } from "console";
import profileSlice from "./slice/profile-slice";
import homeSlice from "./slice/home-slice";

 const store = configureStore({
    reducer: {
        contactStore: contactSlice.reducer,
        testimonialStore: testimonialSlice.reducer,
        serviceStore: serviceSlice.reducer,
        profileStore: profileSlice.reducer,
        homeStore: homeSlice.reducer,
    }
});

export const makeStore = () => {
    return store;
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const contactStoreActions = contactSlice.actions;
export const testimonialStoreActions = testimonialSlice.actions;
export const serviceStoreActions = serviceSlice.actions;
export const profileStoreActions = profileSlice.actions;
export const homeStoreActions = homeSlice.actions;

