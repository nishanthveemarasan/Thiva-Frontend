import ApiHelper from "@/components/helper/ApiHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactData = createAsyncThunk(
  "contact/fetchContactData",
  async (_, { rejectWithValue }) => {
      const response = await ApiHelper.request({
        endpoint: "api/pages/contact",
        method: "GET",
      });
      if (!response.success) {
        return rejectWithValue("Failed to fetch contact data");
      }
      return response.result.data;
  }
);

export const fetchTestimonialData = createAsyncThunk(
  "testimonial/fetchTestimonialData",
  async (_, { rejectWithValue }) => {
      const response = await ApiHelper.request({
        endpoint: "api/pages/testimonials",
        method: "GET",
      });

      if (!response.success) {
        return rejectWithValue("Failed to fetch testimonial data");
      }
      return response.result.data;
  }
);

export const fetchServicesData = createAsyncThunk(
  "service/fetchServicesData",
  async (_, { rejectWithValue }) => {
      const response = await ApiHelper.request({
        endpoint: "api/pages/services",
        method: "GET",
      });

      if (!response.success) {
        return rejectWithValue("Failed to fetch service data");
      }
      return response.result.data;
  }
);

export const fetchProfileData = createAsyncThunk(
  "service/fetchProfileData",
  async (_, { rejectWithValue }) => {
      const response = await ApiHelper.request({
        endpoint: "api/pages/about",
        method: "GET",
      });

      if (!response.success) {
        return rejectWithValue("Failed to fetch account data");
      }
      return response.result.data;
  }
);

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeDate",
  async (_, { rejectWithValue }) => {
      const response = await ApiHelper.request({
        endpoint: "api/pages/home",
        method: "GET",
      });
      if (!response.success) {
        return rejectWithValue("Failed to fetch account data");
      }
      return response.result.data;
  }
);