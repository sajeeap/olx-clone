import React, { useContext, useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";

const Signup = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    password: ""
  });

  const { user, signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleName = (value) => {
    setUserName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePhone = (value) => {
    setPhone(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate username
    if (!userName.trim()) {
      formErrors.userName = "Username is required.";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/; // Example: Only 10-digit phone numbers
    if (!phone.trim()) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      formErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Prevent form submission if there are errors
    }
    setLoading(true);
    let res = await signUp(userName, email, phone, password);
    if (res.success) {
      toast.success("Signup successful");
    } else {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   let res = await signUp(userName, email, phone, password);
  //   if (res.success) {
  //     toast.success("signup successfull");
  //   } else {
  //     setLoading(false);
  //     toast.error("something went wrong");
  //   }
  // };

  

  useEffect(() => {
    if (user) {
      navigate("/");  // Redirect when the user is already logged in
    }
  }, [user, navigate]);
  

  return (
    <div className="flex justify-center items-center min-h-[70vh] mt-4">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="border-2 border-solid border-gray-300 p-10 rounded"
      >
        <p className="text-3xl font-bold">Sign Up</p>
        <FormInput
          type="text"
          placeHolder="User Name"
          handleChange={handleName}
          error={errors.userName}
        />
        {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}

        <FormInput
          type="email"
          placeHolder="Email"
          handleChange={handleEmail}
          error={errors.email}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <FormInput
          type="tel"
          placeHolder="Phone"
          handleChange={handlePhone}
          error={errors.phone}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <FormInput
          type="password"
          placeHolder="Password"
          handleChange={handlePassword}
          error={errors.password}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

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
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
