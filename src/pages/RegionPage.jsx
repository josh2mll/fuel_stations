import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

const RegionPage = ({ data }) => {
  const { part, region } = useParams();
  const cities = data[part][region];

  const navigate = useNavigate();

  const { setPreviousPage } = useOutletContext();
  setPreviousPage(`/${part}`);

  if (!cities){
    navigate(`/not_found`);
  } else {
    return (
      <>
        <h2>Регіон: {region}</h2>
        <h3>Оберіть населений пункт:</h3>
        {Object.keys(cities).map(city => (<>
          <Link key={city} to={`/${part}/${encodeURIComponent(region)}/${encodeURIComponent(city)}`}>
            {city}
          </Link>
          <br/>
          </>
        ))}
      </>
    );
  }
};

export default RegionPage;