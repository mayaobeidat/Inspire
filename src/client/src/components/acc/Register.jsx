// // import { Link, useNavigate } from "react-router-dom";
// // import { useRegisterMutation, setToken } from "../../api/sliceAuth";
// // import { useState, useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";

// // export default function Register() {
// //   // State for form fields and mutation function
// //   const token = useSelector((state) => state.auth.token);
// //   const dispatch = useDispatch();
// //   const [newUser] = useRegisterMutation();
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     address: "",
// //     username: "",
// //     password: "",
// //   });

// //   const onChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const validateInputs = (input) => input.length > 0;

// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     const inputs = ["name", "email", "address", "username", "password"];
// //     // Correct the validation to check the form's actual values
// //     if (inputs.some((input) => !validateInputs(form[input]))) {
// //       alert("You must fill out all fields");
// //       return;
// //     }
  
// //     try {
// //       // Pass the form object to the newUser function
// //       const response = await newUser(form).unwrap();
// //       console.log(response); // Log response to check its structure
// //       if (response.token) {
// //         dispatch(setToken(response.token));
// //         navigate("/auth/me"); // Navigate to account page after successful registration
// //       }
// //     } catch (error) {
// //       console.error("Registration failed:", error?.data || "Unknown error");
// //     }
// //   };
      
// //   return (
// //     <div className="register-page">
// //       <form onSubmit={onSubmit} className="register-form">
// //         <h1 className="register-title">Sign Up</h1>
        
// //         {/* Input fields for name, email, address, username, password */}
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Name"
// //             name="name"
// //             onChange={onChange}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="exampleInputEmail1"
// //             aria-describedby="emailHelp"
// //             placeholder="Email..."
// //             name="email"
// //             onChange={onChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Address..."
// //             name="address"
// //             onChange={onChange}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <input
// //             type="username"
// //             className="form-control"
// //             // id="exampleInputPassword1"
// //             placeholder="Username..."
// //             name="username"
// //             onChange={onChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <input
// //             type="password"
// //             className="form-control"
// //             // id="exampleInputPassword1"
// //             placeholder="Password..."
// //             name="password"
// //             onChange={onChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-submission">
// //           {/* Submit button */}
// //           <button type="submit" className="submit-btn">
// //             Sign Up
// //           </button>
// //           {/* Link to login page */}
// //           <p className="login-link">
// //             Have an account? <Link to={"/auth/login"}>Login</Link>
// //           </p>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };



// import { Link, useNavigate } from "react-router-dom";
// import { useRegisterMutation } from "../../api/sliceAuth";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setToken } from "../../api/sliceAuth";

// export default function Register() {
//   // State for form fields
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     username: "",
//     password: "",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [newUser] = useRegisterMutation();

//   // Handle input changes and update form state
//   const onChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Function to validate if input fields are not empty
//   const validateInputs = (form) => {
//     return Object.values(form).every(input => input.trim().length > 0);
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
    
//     // Validate form inputs
//     if (!validateInputs(form)) {
//       alert("You must fill out all fields");
//       return;
//     }

//     try {
//       // Submit form data to the register endpoint
//       const response = await newUser(form).unwrap();
      
//       // Log the response to understand its structure
//       console.log("Registration response:", response);
      
//       // Check if the response contains a token
//       if (response.token) {
//         // Dispatch the token to the Redux store
//         dispatch(setToken(response.token));
        
//         // Navigate to the account page
//         navigate("/auth/me");
//       } else {
//         alert("Registration succeeded, but no token received.");
//       }
//     } catch (error) {
//       console.error("Registration failed:", error?.data || "Unknown error");
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="register-page">
//       <form onSubmit={onSubmit} className="register-form">
//         <h1 className="register-title">Sign Up</h1>
        
//         {/* Input fields for name, email, address, username, password */}
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             name="name"
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email..."
//             name="email"
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Address..."
//             name="address"
//             onChange={onChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username..."
//             name="username"
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password..."
//             name="password"
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div className="form-submission">
//           {/* Submit button */}
//           <button type="submit" className="submit-btn">
//             Sign Up
//           </button>
//           {/* Link to login page */}
//           <p className="login-link">
//             Have an account? <Link to={"/auth/login"}>Login</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }














import { Link, useNavigate } from "react-router-dom";
import { clearToken, useRegisterMutation } from "../../api/sliceAuth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Route } from "router";

export default function Register() {
 // State for form fields and mutation function
 const [addNewUser] = useRegisterMutation();
 const navigate = useNavigate();
 const [form, setForm] = useState({
   name: "",
   email: "",
   address: "",
   username: "",
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
   alert("Registration complete!")
   navigate('/'); // Navigate to account page after successful registration
 };


 return (
   <div className="register-page">
     <form onSubmit={onSubmit} className="register-form">
       <h1 className="register-title">Sign Up</h1>
      
       {/* Input fields for name, email, address, username, password */}
       <div className="form-group">
         <input
           type="text"
           className="form-control"
           placeholder="name"
           name="Name"
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
           // id="exampleInputPassword1"
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
           // id="exampleInputPassword1"
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


