import { useAppSelector } from '../../store/hooks';
import Card from '../Card';
import "./index.css";

const SearchResults = () => {
  const { searchResult } = useAppSelector(state => state.reducer);

  return (
    <div className='search-result'>
      {searchResult.length && searchResult.map((result: any) => {
        return <Card key={result.show.id} show={result.show} />
      })}
    </div>
  )
}

export default SearchResults;