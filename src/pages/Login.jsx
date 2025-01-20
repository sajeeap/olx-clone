import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const validateForm = () => {
    let isValid = true;

    // Reset error states
    setEmailError("");
    setPasswordError("");

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    // Password Validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
    
    try {
      let res = await logIn(email, password);
      
      if (res.success) {
        toast.success("Login successful");
      } else {
        // Handling specific errors returned from logIn function
        setLoading(false);
        
        if (res.message) {
          toast.error(res.message); // Display specific error message from logIn response
        } else {
          toast.error("An unknown error occurred. Please try again later.");
        }
      }
    } catch (error) {
      // Handling unexpected errors (e.g., network issues, server issues)
      setLoading(false);
      toast.error(`Error: ${error.message || "Something went wrong. Please try again later."}`);
    }
  };
  

  if (user) return navigate("/");

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="border-2 border-solid border-gray-300 p-10 rounded"
      >
        <p className="text-3xl font-bold">Log In</p>

        <FormInput
          type="email"
          placeHolder="Email"
          handleChange={handleEmail}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>} {/* Display email error */}

        <FormInput
          type="password"
          placeHolder="Password"
          handleChange={handlePassword}
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>} {/* Display password error */}

        <div className="text-center">
          {loading ? (
            <Spinner />
          ) : (
            <button className="bg-green-900 text-white py-2 px-3 rounded">
              Submit
            </button>
          )}
        </div>

        <div className="text-center my-2">
          <Link to="/signup">Create an account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
