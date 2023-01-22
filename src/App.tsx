import { Provider } from 'react-redux';
import {store} from './store';
import './App.css'
import Header from './components/Header';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import { useAppDispatch } from './store/hooks';
import { getSearchResults } from './store/actions';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    store.dispatch(getSearchResults(searchText))
  }, [searchText])
  
  return (
    <Provider store={store}>
      <Router>
        <Header searchText={searchText} setSearchText={setSearchText} />
        {!searchText ? (
          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="detail/:id" element={<ShowDetails />} />
          </Routes>
        ) : (
            <SearchResults />
        )}
      </Router>
    </Provider>
  );
}

export default App;