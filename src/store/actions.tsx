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

export const getShowsList = () => {
  return async (dispatch : Dispatch<ILoading | IGetAllShows>) => {
    dispatch(LOADING(true));
    const shows = await fetchAllShows();
    dispatch(GET_SHOWS_LIST(shows));
    dispatch(LOADING(false));
  }
}

export const getShowsDetails = () => {
  return async (dispatch: Dispatch<ILoading | IGetShowsDetails>) => {
    dispatch(LOADING(true));
    const shows = await fetchShowDetails();
    dispatch(GET_SHOW_DETAILS(shows));
    dispatch(LOADING(false));
  };
};

export const getSearchResults = () => {
  return async (dispatch: Dispatch<ILoading | ISearchResult>) => {
    dispatch(LOADING(true));
    const shows = await fetchSearchResults();
    dispatch(GET_SEARCH_RESULT(shows));
    dispatch(LOADING(false));
  };
};

