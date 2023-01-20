import { IShowsDetail } from "../interfaces";

export const organizeShows = (shows:IShowsDetail[]) => {
  let result:any = {};
  shows.forEach((show : IShowsDetail) => {
    if (result[show.type]) {
      result[show.type] = [...result[show.type], show];
    } else {
      result[show.type] = [show];
    }
  });
  console.log(result);
  return result;
}