import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

const HomePage = ({ data }) => {
  const { part } = useParams();
  const regions = data[part];
  
  const navigate = useNavigate();

  const { previousPage, setPreviousPage } = useOutletContext();

  if (previousPage){
    setPreviousPage(null);
  }

  if (part != "Захід" && part != "Північ" && part != "Центр" && part != "Південь" && part != "Схід" && part != undefined){
    navigate("/not_found");
  } else {
    return (
      <>
        <nav>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className={part == "Захід" ? "nav-link active" : "nav-link"} to="/Захід">Захід</Link>
            </li>
            <li className="nav-item">
              <Link className={part == "Північ" ? "nav-link active" : "nav-link"} to="/Північ">Північ</Link>
            </li>
            <li className="nav-item">
              <Link className={part == "Центр" ? "nav-link active" : "nav-link"} to="/Центр">Центр</Link>
            </li>
            <li className="nav-item">
              <Link className={part == "Південь" ? "nav-link active" : "nav-link"} to="/Південь">Південь</Link>
            </li>
            <li className="nav-item">
              <Link className={part == "Схід" ? "nav-link active" : "nav-link"} to="/Схід">Схід</Link>
            </li>
          </ul>
        </nav>

        {regions != undefined && (
          <>
            <h2>Оберіть регіон:</h2>
            {Object.keys(regions).map(region => (
              <>
                <Link key={region} to={`/${part}/${encodeURIComponent(region)}`}>
                  {region}
                </Link>
                <br/>
              </>
            ))}
          </>
        )}
      </>
    );
  }
};

export default HomePage;