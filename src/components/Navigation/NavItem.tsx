import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavItem = styled(Link)`
  display: flex;
  list-style-type: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  color: #596e79;
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    color: #c3195d;
    font-weight: 700;
  }
`;
