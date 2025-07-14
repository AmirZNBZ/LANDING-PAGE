import type React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ className = "", onClick, children }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
