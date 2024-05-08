import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    });
  return(<p>404 - Not found(</p>);
}
export default NotFoundPage;