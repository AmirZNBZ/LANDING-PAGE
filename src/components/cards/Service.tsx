import React from "react";
import Paragraph from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const Service = ({ description, icon, title }: ServiceProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">{icon}</div>
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default Service;
