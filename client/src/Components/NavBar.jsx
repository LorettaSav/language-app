import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../Contexts/authContext";

export default function NavBar() {
  const auth = useContext(authContext);
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          {auth.user ? (
            <button onClick={auth.logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          {auth.user && <Link to="/private">My Dashboard</Link>}
        </li>
      </ul>
    </div>
  );
}
