import { Dispatch } from "react";
import { fetchAllShows, fetchSearchResults, fetchShowDetails } from "../apis"
import { IGetAllShows, IGetShowsDetails, ILoading, ISearchResult, IShows, IShowsDetail, IUser } from "../interfaces";
import * as actions from "./actionTypes";

export const GET_SHOWS_LIST = (movies: IShows) => ({
  payload: movies,
  type: actions.GET_ALL_SHOWS
});

export const GET_SEARCH_RESULT = (movies: IShows) => ({
  payload: movies,
  type: actions.GET_SEARCH_RESULT
});

export const GET_SHOW_DETAILS = (show: IShowsDetail) => ({
  payload: show,
  type: actions.GET_SHOW_DETAILS,
})

export const LOADING = (data: boolean) => ({
  payload: data,
  type : actions.LOADING
})

export const SIGNIN = (user:IUser) => ({
  payload: user,
  type : actions.SIGNIN
})

export const SIGNOUT = () => ({
  type: actions.SIGNOUT
})

export const SIGNUP = (user:IUser) => ({
  payload: user,
  type : actions.SIGNUP
})

export const ADD_BOOKMARK = (id: number) => ({
  payload: id,
  type: actions.ADD_BOOKMARK
})

export const REMOVE_BOOKMARK = (id: number) => ({
  payload: id,
  type: actions.REMOVE_BOOKMARK
})

export const SHOW_SEARCH = (show: boolean) => ({
  type: actions.SHOW_SEARCH,
  payload:show
})

export const getShowsList = () => {
  return async (dispatch : Dispatch<ILoading | IGetAllShows>) => {
    dispatch(LOADING(true));
    const shows = await fetchAllShows();
    dispatch(GET_SHOWS_LIST(shows));
    dispatch(LOADING(false));
  }
}

export const getSearchResults = (query:string) => {
  return async (dispatch: Dispatch<ILoading | ISearchResult>) => {
    dispatch(LOADING(true));
    if (query) {
      const shows = await fetchSearchResults(query);
      dispatch(GET_SEARCH_RESULT(shows));
      dispatch(SHOW_SEARCH(true));
    } else {
      dispatch(SHOW_SEARCH(false));
    }
    dispatch(LOADING(false));
  };
};

