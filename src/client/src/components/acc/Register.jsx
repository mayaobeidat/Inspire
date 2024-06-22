import { Link, useNavigate } from "react-router-dom";
import { clearToken, useRegisterMutation } from "../../api/sliceAuth";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
 const [addNewUser] = useRegisterMutation();
 const navigate = useNavigate();
 const [form, setForm] = useState({
   name: "",
   email: "",
   address: "",
   username: "",
   password: "",
 });

 const onChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });
 };

 const onSubmit = async (e) => {
   e.preventDefault(); 
   const results = await addNewUser(form);
   console.log(results); 
   alert("Registration complete! Be sure to log in to access your account!")
   navigate('/'); 
 };


 return (
   <div className="register-page">
     <form onSubmit={onSubmit} className="register-form">
       <h1 className="register-title">Sign Up</h1>
             <div className="form-group">
         <input
           type="text"
           className="form-control"
           placeholder="Name..."
           name="name"
           onChange={onChange}
         />
       </div>
       <div className="form-group">
         <input
           type="email"
           className="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           placeholder="Email..."
           name="email"
           onChange={onChange}
           required
         />
       </div>
       <div className="form-group">
         <input
           type="text"
           className="form-control"
           placeholder="Address..."
           name="address"
           onChange={onChange}
         />
       </div>
       <div className="form-group">
         <input
           type="username"
           className="form-control"
           placeholder="Username..."
           name="username"
           onChange={onChange}
           required
         />
       </div>
       <div className="form-group">
         <input
           type="password"
           className="form-control"
           placeholder="Password..."
           name="password"
           onChange={onChange}
           required
         />
       </div>
       <div className="form-submission">
         {/* Submit button */}
         <button type="submit" className="submit-btn">
           Sign Up
         </button>
         {/* Link to login page */}
         <p className="login-link">
           Have an account? <NavLink to={"/login"}>Login</NavLink>
         </p>
       </div>
     </form>
   </div>
 );
}


