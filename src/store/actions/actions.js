import axios from "axios";
import { apiUrl } from "../../config";
import * as types from "./actionType";
import { toast } from "react-toastify";
import { accordionActionsClasses } from "@mui/material";

export const userLogin = (data, loginSuccess) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, data);
    if (response?.data?.success) {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response?.data?.user,
      });
      loginSuccess();
      toast.success(`Welcome, ${response.data.user.username}`);
    }
  } catch (err) {
    toast.error(err.response.data.msg);
    console.log(err.response);
  }
};

export const userSignUp = (data, loginSuccess) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/users/register`, data);
    if (response?.data?.success) {
      dispatch({
        type: types.SIGNUP_REQUEST,
        payload: response?.data?.user,
      });
      loginSuccess();
      toast.success(`Welcome, ${response.data.user.username}`);
    }
  } catch (err) {
    toast.error(err.response.data.msg);
    console.log(err.response);
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({
      type: types.LOGOUT_REQUEST,
    });
  } catch (err) {
    console.log(err);
  }
};

export const lib_book = (books) => async (dispatch) => {
  console.log(" lib_book action in-----------", books);
  dispatch({
    type: types.LIBRARY_BOOKS,
    // payload: {userName: res.data.title},
    payload: books,
  });
};

export const getAllBooks = (id, token) => async (dispatch) => {
  const header = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };
  try {
    // const URL = `${apiUrl}/book/getAllBooks?category=all&status=all&orderBy=popular&page=1&userId=${id}`
    const URL = `${apiUrl}/book/getAllBooks?&userId=${id}&limit=0`;
    const response = await axios.get(URL, header);
    // const response = await axios.get(`${apiUrl}/book/gets?id=${id}`, header);
    if (response.data.success) {
      dispatch({
        type: types.GET_ALL_BOOKS,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    console.log(err.response);
  }
};

export const getFilteredBooks =
  (data, token, setHasMoreData) => async (dispatch) => {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };

    const URL = `${apiUrl}/book/getAllBooks?category=${data.cat}&status=${data.status}&orderBy=${data.orderBy}&page=${data.pageNo}&userId=${data?.userId}`;

    try {
      const response = await axios.get(URL, header);
      if (response.data.success) {
        if (response?.data.data.length === 0) {
          setHasMoreData(false);
        } else {
          setHasMoreData(true);
        }
        dispatch({
          type: types.GET_FILTERED_BOOKS,
          payload: response?.data?.data,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

export const emptyFilteredBooks = () => async (dispatch) => {
  dispatch({
    type: types.EMPTY_FILTERED_BOOKS,
    payload: [],
  });
};

export const getFavoriteBooks = (token) => async (dispatch) => {
  const header = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };
  try {
    const response = await axios.get(
      `${apiUrl}/favoriteBook/userFavoriteBook`,
      header
    );
    if (response.data.success) {
      dispatch({
        type: types.GET_FAVORITE_BOOKS,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    console.log(err.response);
  }
};

export const favoriteThisBook =
  (data, token, bookArrayName) => async (dispatch) => {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${apiUrl}/favoriteBook/favoritOrunfavorite`,
        data,
        header
      );
      if (response?.data?.success) {
        dispatch({
          type: types.FAVORITE_THIS_BOOK,
          payload: { data: data, bookArrayName: bookArrayName },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const getBookChapterContents =
  (bookId, chapterId, token) => async (dispatch) => {
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };
    try {
      const response = await axios.get(
        `${apiUrl}/book/getSingleBookByBookId/${bookId}/${chapterId}`,
        header
      );

      if (response.data.success) {
        console.log("Content: ", response?.data?.data);
        // dispatch({
        //   type: types.GET_BOOK_CHAPTER_CONTENT,
        //   payload: response?.data?.data,
        // });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

export const getChapterTitles = (id, token) => async (dispatch) => {
  const URL = `${apiUrl}/chapter/get/${id}`;

  const authHeader = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.get(URL, authHeader);
    if (response?.data?.success) {
      dispatch({
        type: types.GET_CHAPTERS_TITLES,
        payload: response.data.data,
      });
    }
  } catch (err) {
    console.log("Chapters Titles Fetching Failed. ", err);
  }
};

export const getChapterContent =
  (chapterId, bookId, token) => async (dispatch) => {
    const URL = `${apiUrl}/book/getSingleBookByBookId/${bookId}/${chapterId}`;
    const authHeader = {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    };

    try {
      const response = await axios.get(URL, authHeader);
      if (response?.data?.success) {
        if (response?.data?.data.length > 0) {
          dispatch({
            type: types.GET_ONE_CHAPTER,
            payload: response.data.data,
          });
        } else {
          toast.info("This chapter has no content.");
        }
      }
    } catch (err) {
      console.log("Chapter Content Fetching Failed. ", err);
    }
  };

export const forgetPassword = (email, onSuccess) => async (dispatch) => {
  const data = {
    email: email,
  };
  const header = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await axios.post(
      `${apiUrl}/users/forgetPassword`,
      data,
      header
    );
    if (response?.data?.success) {
      onSuccess();
      toast.success(
        "Reset password link sent. Please check your email address."
      );
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (err) {
    console.log(err?.response);
    toast.error(err.response.data.msg);
  }
};

export const uploadImage = (data, token) => async (dispatch) => {
  const header = {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${apiUrl}/users/uploadImage`,
      data,
      header
    );
    if (response?.data?.success) {
      toast.success("Profile Picture Changed Successfully.");
      dispatch({
        type: types.UPLOAD_PROFILE_IMAGE,
        payload: response.data.data,
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (err) {
    console.log(err?.response);
    toast.error(err.response.data.msg);
  }
};

export const profileChanges = (data, token) => async (dispatch) => {
  const header = {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(`${apiUrl}/users/update`, data, header);
    if (response?.data?.success) {
      toast.success("Profile Informations Updated!");
      dispatch({
        type: types.UPLOAD_PROFILE_INFORMATIONS,
        payload: response.data.data,
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (err) {
    console.log(err?.response);
    toast.error(err.response.data.msg);
  }
};

export const updatePassword = (data, token) => async (dispatch) => {
  const header = {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(
      `${apiUrl}/users/changePassword`,
      data,
      header
    );
    if (response?.data?.success) {
      toast.success(response?.data?.msg);
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (err) {
    console.log(err?.response);
    toast.error("Something went wrong.");
  }
};

export const updateFeatures = (data, token) => async (dispatch) => {
  const header = {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(
      `${apiUrl}/users/featureUpdate`,
      data,
      header
    );
    if (response?.data?.success) {
      toast.success(response?.data?.msg);
      dispatch({
        type: types.UPDATE_FEATURES,
        payload: response.data.data,
      });
    } else {
      toast.error("Account Features Updated!");
    }
  } catch (err) {
    console.log(err?.response);
    toast.error("Something went wrong.");
  }
};

export const getBookmarks = (token) => async (dispatch) => {
  const URL = `${apiUrl}/bookmark/getUserBookmark`;

  const authHeader = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.get(URL, authHeader);
    if (response?.data?.success) {
      dispatch({
        type: types.GET_BOOKMARKS,
        payload: response.data.data,
      });
    }
  } catch (err) {
    console.log("Failed fetching bookmarks. ", err);
  }
};

export const getBook = (book) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BOOK,
      payload: book,
    });
  } catch (err) {
    console.log(err);
  }
};

export const googleLogin =
  (data, onLoginFailed, onLoginSuccess) => async (dispatch) => {
    const URL = `${apiUrl}/social/googleLogin`;

    try {
      const response = await axios.post(URL, data);
      if (response.data.success) {
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: response?.data.data,
        });
        toast.success(
          `Welcome, ${response.data.data.firstName} ${response.data.data.lastName}`
        );
        onLoginSuccess();
      } else {
        onLoginFailed();
      }
    } catch (err) {
      onLoginFailed();
      console.log(err);
    }
  };

export const postReview =
  (data, token, onSuccessPostReview) => async (dispatch) => {
    const URL = `${apiUrl}/comments/create`;
    const header = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const response = await axios.post(URL, data, header);
      if (response.data.success) {
        toast.success(`Review Posted!`);
        onSuccessPostReview();
      } else {
        toast.error(`Something went wrong in posting review.`);
      }
    } catch (err) {
      toast.error(`Something went wrong in posting review.`);
      console.log(err);
    }
  };
