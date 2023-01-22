import { useEffect } from 'react'
import { IShowsDetail } from '../../interfaces';
import { getShowsList } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { genres } from '../../utils';
import Card from '../Card';
import Loading from '../Loading';

import './index.css';

const ShowList = () => {
  const dispatch = useAppDispatch();
  const {shows : movies, laoding} = useAppSelector((state) => state.reducer);

  useEffect(() => {
    if (!movies.length) {
      dispatch(getShowsList());
    }
  }, [])

  const getGenreShows = (genre: string) => {
    return movies.length ? movies.filter((show: IShowsDetail) => {
      if (show.genres.includes(genre)) {
        return show;
      }
    }) : null;
  }

  return (
    <div>
      {!laoding ?
        genres.map((genre) => {
          let shows = getGenreShows(genre);
          return shows && shows.length ? (
            <div key={genre}>
              <h3>{genre}</h3>
              <div className="card-list">
                {shows.map((show: any) => {
                  return <Card key={show.id} show={show} />;
                })}
              </div>
            </div>
          ) : null;
        }) :
        <Loading />
        }
    </div>
  );
}

export default ShowList;