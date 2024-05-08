import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import FuelPricesTable from '../components/FuelPricesTable';

const StationPage = ({ data }) => {
  const { region, city, address } = useParams();
  const station = data[region][city][address][0];

  const navigate = useNavigate();

  const { setPreviousPage } = useOutletContext();
  setPreviousPage(`/${encodeURIComponent(region)}/${encodeURIComponent(city)}`);
  
  if (!station) {
    navigate('/not_found');
  } else {
    return (
      <>
        <h2>Регіон: {region}</h2>
        <h3>Населений пункт: {city}</h3>
        <h4>Вулиця: {address}</h4>
        <div>
          {station.building && (<p>Будинок: {station.building}</p>)}
          {station.phone && (<p>Телефон: {station.phone}</p>)}
          {station.fuels.length && (<>
            <h4>Ціни на пальне:</h4>
            <FuelPricesTable fuels={station.fuels}/>
          </>) || (
            <h4>Палива немає в наявності</h4>
          )}
        </div>
      </>
    );
  }
};

export default StationPage;