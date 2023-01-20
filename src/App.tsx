import { Provider } from 'react-redux';
import {store} from './store';
import './App.css'
import Header from './components/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ShowList />} />
      <Route path="detail" element={<ShowDetails />} />
    </>
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
