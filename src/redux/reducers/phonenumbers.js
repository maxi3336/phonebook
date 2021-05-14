import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phonenumbers: undefined,
};

const phonenumbers = createSlice({
  name: "phonenumbers",
  initialState,
  reducers: {
    setPhonenumbers: (state, action) => {
      state.phonenumbers = action.payload;
    },
    addPhonenumber: (state, action) => {
      state.phonenumbers.unshift(action.payload);
    },
    deletePhonenumber: (state, action) => {
      state.phonenumbers = state.phonenumbers.filter(
        (num) => num._id !== action.payload
      );
    },
    updatePhonenumber: (state, action) => {
      state.phonenumbers = state.phonenumbers.map((num) => {
        if (num._id === action.payload._id) return action.payload;
        return num;
      });
    },
  },
});

const { actions, reducer } = phonenumbers;

export const {
  setPhonenumbers,
  addPhonenumber,
  deletePhonenumber,
  updatePhonenumber,
} = actions;

export default reducer;
