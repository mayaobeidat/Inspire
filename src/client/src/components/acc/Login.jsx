import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/sliceAuth";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../api/sliceAuth";
import { NavLink } from "react-router-dom";

export default function Login() {

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM", form);
    const result = await login(form);
    console.log("RESULT", result);
    dispatch(setToken(result.data.token))
    // navigate("/auth/me");
  };
console.log("login")
  useEffect(() => {
    console.log("token", token);
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="login-page">
      {!token && (
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Login</h1>
          <div className="form-group">
            <input
              type="username"
              className="form-control"
              placeholder="Username..."
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="form-submission">
            <button type="submit" className="login-button">
              Login
            </button>
            <p>
              No Account?
              <NavLink to="/register"> Sign up</NavLink>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}