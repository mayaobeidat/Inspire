/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearToken } from "../../api/sliceAuth";

export default function NavBar() {
  const token = useSelector((state) => state.auth);
//   .token after auth? fix
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/login");
  };

  return (
    <nav className="navBar">
      <ul className="navBarL">
        <li>
          <NavLink className="nlH" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nlB" to="/">
            Products
          </NavLink>
        </li>
        {token ? (
          <>
            <li>
              <NavLink className="nlA" to="/users/me">
                Account
              </NavLink>
            </li>
            <li>
              <button className="nlL" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="nlR" to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="nlL" to="/login">
                Log In
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}