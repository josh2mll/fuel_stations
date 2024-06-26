import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

const CityPage = ({ data }) => {
  const { part, region, city } = useParams();
  const addresses = data[part][region][city];

  const navigate = useNavigate();

  const { setPreviousPage } = useOutletContext();
  setPreviousPage(`/${part}/${encodeURIComponent(region)}`);

  if (!addresses){
    navigate(`/not_found`);
  } else {
    return (
      <>
        <h2>Регіон: {region}</h2>
        <h3>Населений пункт: {city}</h3>
        <h4>Оберіть вулицю:</h4>
        {Object.keys(addresses).map(address => (<>
          <Link key={address} to={`/${part}/${encodeURIComponent(region)}/${encodeURIComponent(city)}/${encodeURIComponent(address)}`}>
            {address}
          </Link>
          <br/>
          </>
        ))}
      </>
    );
  }
};

export default CityPage;