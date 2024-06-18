import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../api/sliceAuth";
import { useState } from "react";

export default function Register() {
  // State for form fields and mutation function
  const [addNewUser] = useRegisterMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Update form state on input change
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const results = await addNewUser(form); // Call registration mutation
    console.log(results); // Log the registration results
    navigate("/auth/login"); // Navigate to login page after successful registration
  };

  return (
    <div className="register-page">
      <form onSubmit={onSubmit} className="register-form">
        <h1 className="register-title">Sign Up</h1>
        
        {/* Input fields for first name, last name, email, password */}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={onChange}
            required
          />
        </div>
        
        {/* Submit button */}
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        
        {/* Link to login page */}
        <p className="login-link">
          Have an account? <Link to={"/auth/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
}