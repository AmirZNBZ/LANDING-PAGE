interface ButtonLinkProps {
  text: string;
  href: string;
  className?: string;
}

const ButtonLink = ({ className = "", href, text }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full relative outline-none overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};

export default ButtonLink;
