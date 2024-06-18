import { Link } from "react-router-dom";

export default function NavLoggedOut() {
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
          <Link to={"./auth/Login.jsx"} className="loginButt">
            <h6>Sign In Here</h6>
          </Link>
          <Link to={"./auth/Register.jsx"} className="registerButt">
            <h6>Register Here</h6>
          </Link>
        </div>
      </nav>
    </>
  );
}
