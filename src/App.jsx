import { Link, Outlet, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import sortByField from './shared/sortByField';
import sortByKeys from './shared/sortByKeys';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import CityPage from './pages/CityPage';
import StationPage from './pages/StationPage';
import groupByFields from './shared/groupByFields';
import NotFoundPage from './pages/NotFoundPage';
import groupByPart from './shared/groupByPart';

const App = () => {  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [previousPage, setPreviousPage] = useState(null);

  useEffect(() => {
    axios
      .get('https://td4.brsm-nafta.com/api/v2/Mobile/get_full_ffs')
      .then((response) => {
        const groupedData = groupByPart(
                            sortByKeys(
                              groupByFields(
                                sortByField(response.data, 'city'), ['region', 'city', 'address'])));
                                // Grouping by region, city, address and in alphabetical order
        // console.log(groupedData);
        setData(groupedData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <h3>{error.message}</h3>
      </div>
    );
  } else if (!data) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={
          <>
            <header>
              {previousPage && (
                <Link to={previousPage}>Назад</Link>
              )}
              <span>БРСМ нафта </span>
            </header>
            <div className='feed'>
              <Outlet context={ { previousPage, setPreviousPage } } />
            </div>
          </>
        }>
          <Route index element={<HomePage data={data} />} />

          <Route path="/:part" element={<HomePage data={data} />} />
          <Route path="/:part/:region" element={<RegionPage data={data} />} />
          <Route path="/:part/:region/:city" element={<CityPage data={data} />} />
          <Route path="/:part/:region/:city/:address" element={<StationPage data={data} />} />

          <Route path="/not_found" element={<NotFoundPage/>} />
          <Route path="/:part/not_found" element={<NotFoundPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    );
  }
};

export default App;