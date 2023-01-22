import { useAppSelector } from "../../store/hooks";
import Card from "../Card";
import Loading from "../Loading";
import "./index.css";

const SearchResults = () => {
  const { searchResult, loading } = useAppSelector(
    (state) => state.reducer
  );

  return (
    <div className="search-result">
      {loading ? (
        <Loading />
      ) : searchResult.length ? (
        searchResult.map((result: any) => {
          return <Card key={result.show.id} show={result.show} />;
        })
      ) : (
        <div>
          <h1>No Result Found</h1>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
