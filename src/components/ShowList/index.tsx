import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getShowsList } from '../../store/actions';
import { GET_ALL_SHOWS } from '../../store/actionTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ShowList = () => {
  const [showsList, setShowsList] = useState([]);
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => {
    console.log(state);
    return state.reducer.shows
  });
  useEffect(() => {
    if (!movies.length) {
      dispatch(getShowsList());
    }
  }, [])
  
  const setdata = () => {
    setShowsList(movies);
  }
  return (
    <div>{JSON.stringify(movies)}
      <Link to="detail"> next</Link>
    </div>
  )
}

export default ShowList;