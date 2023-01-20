import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getShowsList } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ShowList = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.reducer.shows);

  useEffect(() => {
    if (!movies.length) {
      dispatch(getShowsList());
    }
  }, [])

  return (
    <div>
      {
        Object.keys(movies).map(genre => {
          return (
            <div key={genre}>
              <h3>{genre}</h3>
              {movies[genre].map((movie:any) => {
                return (
                  <div key={movie.id}>
                    <h4>{movie.name}</h4>
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowList;