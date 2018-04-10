import styled from "styled-components";
import { Link } from "react-scroll";

export const Title = styled.div`
  padding: 0.5rem;
  padding-right: 1rem;
  h1 {
    font-size: 2rem;
  }
`;

export const NavItem = styled(Link)`
  font-size: 1.5rem;
`;

export const LogoContainer = styled.a`
  padding-top: 0;
  padding-bottom: 0;
`;
