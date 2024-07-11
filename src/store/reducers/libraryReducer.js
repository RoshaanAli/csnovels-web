// import BOOK_CARD from "../../Assets/Images/book-card.png";
// import React from "react";
// import { booksReducer } from "./booksReducer";
// import * as actionType from '../actions/actionType'
import { LIBRARY_BOOKS } from "../actions/actionType";

const initialState = [];

export function libraryReducer(state = initialState, action) {
  switch (action.type) {
    case LIBRARY_BOOKS:
      console.log("libraryReducer action", action);
      let library_array = [action.payload];
      console.log("libraryReducermmmmmmmmmmm", library_array);
      return library_array;
    default:
      return state;
  }
}
