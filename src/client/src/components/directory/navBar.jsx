import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearToken } from "../../api/sliceAuth";

export default function NavBar() {
  const token = useSelector((state) => state.auth.token); 
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
        <li>
          <NavLink className="nlC" to="/cart">
            Cart
          </NavLink>
        </li>
        {token ? (
          <>
            <li>
              <NavLink className="nlA" to="/auth/me">
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
