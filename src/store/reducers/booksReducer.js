import {
  FAVORITE_THIS_BOOK,
  GET_ALL_BOOKS,
  GET_FILTERED_BOOKS,
  GET_FAVORITE_BOOKS,
  EMPTY_FILTERED_BOOKS,
  GET_CHAPTERS_TITLES,
  GET_ONE_CHAPTER,
  GET_BOOKMARKS,
  GET_BOOK,
} from "../actions/actionType";
import BOOK_CARD from "../../Assets/Images/book-card.png";

const initialState = {
  books: [],
  book: null,
  favoritedBooks: [],
  filteredBooks: [],
  chaptersTitles: [],
  bookmarks: [],
  chapterContent: [],
};

export function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };

    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case GET_FAVORITE_BOOKS:
      return {
        ...state,
        favoritedBooks: action.payload,
      };

    case GET_FILTERED_BOOKS:
      return {
        ...state,
        filteredBooks: [...state.filteredBooks, ...action.payload],
      };

    case EMPTY_FILTERED_BOOKS:
      return {
        ...state,
        filteredBooks: action.payload,
      };

    case GET_CHAPTERS_TITLES:
      return {
        ...state,
        chaptersTitles: action.payload,
      };

    case GET_ONE_CHAPTER:
      return {
        ...state,
        chapterContent: action.payload,
      };

    case FAVORITE_THIS_BOOK:
      let bookId = action.payload.data.bookId;
      let bookArrayName = action.payload.bookArrayName;
      console.log(bookArrayName);
      let index = 0;

      let copyArray = [];
      let propertToReplace = null;

      if (bookArrayName === "books") {
        copyArray = state?.books?.slice();
        state?.books?.map((ele, idx) => {
          if (ele?._id === bookId) {
            index = idx;
          }
        });
      } else if (bookArrayName === "favoritedBooks") {
        copyArray = state?.favoritedBooks?.slice();

        state?.favoritedBooks?.map((ele, idx) => {
          if (ele?._id === bookId) {
            index = idx;
          }
        });
      } else if (bookArrayName === "filteredBooks") {
        copyArray = state?.filteredBooks?.slice();
        state?.filteredBooks?.map((ele, idx) => {
          if (ele?._id === bookId) {
            index = idx;
          }
        });
      }

      copyArray[index].isLike = !copyArray[index]?.isLike;

      if (bookArrayName === "books") {
        propertToReplace = { books: copyArray };
      } else if (bookArrayName === "favoritedBooks") {
        copyArray.splice(index, 1);
        propertToReplace = { favoritedBooks: copyArray };
      } else if (bookArrayName === "filteredBooks") {
        propertToReplace = { filteredBooks: copyArray };
      }

      return {
        ...state,
        ...propertToReplace,
      };

    case GET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
}
