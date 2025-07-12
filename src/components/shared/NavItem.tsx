import React from "react";

interface navItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: navItemProps) => {
  return (
    <li>
      <a className="duration-300 font-medium ease-linear hover:text-primary py-3" href={href}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
