import React from "react";

const FormInput = ({ type, placeHolder, handleChange }) => {
  return (
    <div className="py-4">
      <input
        className="border-2 border-solid border-gray-200 outline-none p-2 rounded"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
    </div>
  );
};

export default FormInput;
