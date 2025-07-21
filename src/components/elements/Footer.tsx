import { navItems } from "../../utils/navItems";
import Container from "../shared/Container";
import logo from "/assets/icon.svg";
import NavItem from "../shared/NavItem";

const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="EdgeAI-logo" />
            <span className="text-lg font-semibold text-heading-1">EdgeAI</span>
          </div>

          <ul className="flex gap-6 text-heading-1 ">
            {navItems.map(({ href, text }, index) => (
              <NavItem key={index} href={href} text={text} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
