import { Link } from "@chakra-ui/react";

const LinkButton = ({ link, iconName }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" mr="25%">
      <i
        className={iconName}
        style={{ color: "white", fontSize: "2.5rem", cursor: "pointer" }}
      ></i>
    </Link>
  );
};

export default LinkButton;
