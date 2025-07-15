import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <p className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">{children}</p>;
};
export default Title;
