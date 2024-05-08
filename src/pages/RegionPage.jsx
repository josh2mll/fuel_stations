import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

const RegionPage = ({ data }) => {
  const { region } = useParams();
  const cities = data[region];

  const navigate = useNavigate();

  const { previousPage, setPreviousPage } = useOutletContext();

  if (previousPage){
    setPreviousPage(null);
  }

  if (!cities){
    navigate('/not_found');
  } else {
    return (
      <>
        <h2>Регіон: {region}</h2>
        <h3>Оберіть населений пункт:</h3>
        {Object.keys(cities).map(city => (<>
          <Link key={city} to={`/${encodeURIComponent(region)}/${encodeURIComponent(city)}`}>
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