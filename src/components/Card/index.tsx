import React, { useEffect, useState } from "react";
import { IShowsDetail } from "../../interfaces";
import StarRatings from "react-star-ratings";
import { FaHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  REMOVE_BOOKMARK,
  ADD_BOOKMARK
} from "../../store/actionTypes";
import NoImage from '../../assets/no-image.png';

interface ICardProps {
  show: IShowsDetail;
}

const Card = (props: ICardProps) => {
  const [bookmarked, setBookmarked] = useState(false);
  const bookmarks:number[] = useAppSelector(
    (state) => state.reducer.bookmarks
  );
  let navigate = useNavigate(); 
  const dispatch = useAppDispatch();

  console.log(props.show);
  useEffect(() => {
    if (bookmarks.includes(props.show.id)) {
      setBookmarked(true);
    }
  }, [])
  

  const goToDetails = () => {
    navigate(`detail/${props.show.id}`)
  }

  const handleBookmark = () => {
    if (bookmarked) {
      setBookmarked(false);
      dispatch({type:REMOVE_BOOKMARK,payload:props.show.id})
    } else {
      setBookmarked(true);
      dispatch({ type: ADD_BOOKMARK, payload: props.show.id });
    }
  }

  return (
    <div
      className="card-container"
      style={{
        backgroundImage: props.show
          .image ? `url(${props.show.image.medium})`: NoImage
      }}
    >
      <div className="info">
        <div className="data">
          <div className="name-rating" onClick={goToDetails}>
            {props.show.name}
            <StarRatings
              starRatedColor="yellow"
              rating={props.show.rating.average / 2}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <FaHeart
            onClick={handleBookmark}
            style={{
              color: bookmarked ? "red" : "grey",
              fontSize: "30px",
              flex: 1
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
