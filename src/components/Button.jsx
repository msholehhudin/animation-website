import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative bg-violet-50 rounded-full px-7 py-3 text-black cursor-pointer w-fit= z-10  overflow-hidden ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general uppercase text-xs">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
