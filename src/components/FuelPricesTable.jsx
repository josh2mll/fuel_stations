import axios from "axios";
import { useEffect, useState } from "react";

const FuelPricesTable = ({ fuels }) => {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://td4.brsm-nafta.com/api/v2/mobile/fuel_prices/2')
      .then((response) => {
        setFuelPrices(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error while fetching fuel prices</h2>
        <h3>{error.message}</h3>
      </div>
    );
  } else if (!fuelPrices) {
    return (
      <div>
        <h2>Loading fuel prices...</h2>
      </div>
    );
  } else {
    return(<>
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна (грн)</th>
          </tr>
        </thead>
        <tbody>
          {fuelPrices.filter(fuel => fuels.includes(fuel.fuelMobId) && fuel.fuelMobId == 2 || fuel.fuelMobId == 3).map((fuel) => (
             <tr key={fuel.fuelMobId}>
              <td>{fuel.name}</td>
              <td>{fuel.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>);
  }
}

export default FuelPricesTable;