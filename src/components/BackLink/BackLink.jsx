import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  /* діти беруть колір тільки від батька */
  svg,
  span {
    color: inherit;
    pointer-events: none; /* щоб не реагували на ховер окремо */
  }

  &:hover {
    color: orange;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      <span>{children}</span>
    </StyledLink>
  );
};

export default BackLink;