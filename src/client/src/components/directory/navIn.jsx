import { Link } from "react-router-dom";

export default function NavLoggedIn() {
  return (
    <>
      <nav>
        <div className="link-container">
          <Link to={"/"} className="linksH">
            <h3>Home</h3>
          </Link>
          <Link to={"./products/allProducts.jsx"} className="linksI">
            <h3>Items</h3>
          </Link>

          <Link to={"./acc/account.jsx"} className="links-loggedin">
            <h6>Account Info</h6>
          </Link>
          <Link to={"/"} className="links-logout">
            <button
              onClick={localStorage.removeItem("token")}
              className="links-logout-button"
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
