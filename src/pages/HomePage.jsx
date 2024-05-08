import { Link, useOutletContext } from "react-router-dom";

const HomePage = ({ data }) => {
  
  const { previousPage, setPreviousPage } = useOutletContext();

  if (previousPage){
    setPreviousPage(null);
  }

  return (
    <>
      <h2>Оберіть регіон:</h2>
      {Object.keys(data).map(region => (<>
        <Link key={region} to={`/${encodeURIComponent(region)}`}>
          {region}
        </Link>
        <br/>
        </>
      ))}
    </>
  );
};

export default HomePage;