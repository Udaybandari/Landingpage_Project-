import React from "react";
import clsx from "clsx";
import Marker from "./Sections/Marker";

const Button = ({ icon, children, href, containerClassName, onClick, Markerfill }) => {
  const Inner = () => (
    <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
      <span><Marker /></span>
      {icon && (
        <img src={icon} alt="button icon" className="size-10 mr-5 object-contain z-10" />
      )}
      <span>{children}</span>
    </span>
  );

  return href ? (
    <a
      href={href}
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 font-bold text-p1', containerClassName)}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500  font-bold text-p1', containerClassName)}
    >
      <Inner />
    </button>
  );
};

export default Button;
