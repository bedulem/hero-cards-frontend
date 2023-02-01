import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="px-8 py-1 text-principal-white-100 bg-gradient-to-r from-secondary-brown-300 to-secondary-brown-100 shadow-md shadow-secondary-brown-200/30 transition hover:bg-gradient-to-r- hover:from-secondary-brown-400 hover:to-secondary-brown-400 hover:shadow-secondary-brown-200/50 border-b-[1px] border-secondary-brown-100 hover: cursor-pointer"
    >
      {props.value}
    </button>
  );
};

export default Button;
