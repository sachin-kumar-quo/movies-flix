import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { fetchShowCasts, fetchShowCrew, fetchShowDetails } from '../../apis';
import { IShowsDetail } from '../../interfaces';
import Loading from '../Loading';

import "./index.css";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState<IShowsDetail>();
  const [cast, setCast] = useState<any[]>();
  const [crew, setCrew] = useState<any[]>();
  const params = useParams();
  
  useEffect(() => {
    (async () => {
      const show = await fetchShowDetails(Number(params.id));
      const crewdetails = await fetchShowCrew(Number(params.id));
      const castdetails = await fetchShowCasts(Number(params.id));
      setShowDetails(show);
      setCast(castdetails);
      setCrew(crewdetails);
    })();
  },[])

  return (
    <>
      {showDetails ? (
        <div className="detail-container">
          <div className="image-container">
            {showDetails && <img src={showDetails.image.medium} />}
          </div>
          <div className="info-container">
            <div className="title-rating">
              <h1>{showDetails.name}</h1>
              <StarRatings
                starRatedColor="yellow"
                rating={showDetails.rating.average / 2}
              />
            </div>
            <p>
              {new Date(showDetails.premiered).getFullYear()} |{" "}
              {showDetails.runtime} mins |{" "}
              {crew &&
                crew.length > 0 &&
                crew?.find((crew) => crew.type === "Producer")?.person
                  .name}
            </p>
            <div className="cast">
              Cast :
              {cast &&
                cast.slice(0, 3).map((cast) => (
                  <span key={cast.person.id}>
                    {"  "}
                    {cast.person.name},
                  </span>
                ))}
            </div>
            <div className="summary">
              {showDetails.summary.replace(/<[^>]+>/g, "")}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ShowDetails;