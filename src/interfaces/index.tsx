export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IShows {
  shows: IShowsDetail[];
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Link {
  href: string;
}

export interface Links {
  self: Link;
  previousepisode: Link;
  nextepisode: Link;
}

export interface IShowsDetail {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface IActionTypes {
  LOADING: string;
  GET_ALL_SHOWS: string;
  GET_SHOW_DETAILS: string;
  SIGNIN: string;
  SIGNOUT: string;
  SEARCH: string;
  SIGNUP: string;
  GET_SEARCH_RESULT : string;
}

export interface IGetAllShows {
  type: IActionTypes["GET_ALL_SHOWS"];
  payload: IShows;
}

export interface IGetShowsDetails {
  type: IActionTypes["GET_SHOW_DETAILS"];
  payload: IShowsDetail;
}

export interface ILoading {
  type: IActionTypes['LOADING'];
  payload: boolean;
}

export interface ISignin {
  type: IActionTypes['SIGNIN'];
  payload: IUser;
}

export interface ISignup {
  type: IActionTypes["SIGNUP"];
  payload: IUser;
}

export interface ISignout {
  type: IActionTypes["SIGNOUT"];
}

export interface ISearchResult {
  type: IActionTypes["GET_SEARCH_RESULT"];
}

export type IAction =
  | IGetAllShows
  | IGetShowsDetails
  | ILoading
  | ISignin
  | ISignup
  | ISignout
  | ISearchResult;