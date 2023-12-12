import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const MenuItem = styled(Link)`
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

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  text-decoration: overline;
  color: #596e79;
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.5rem;
  }
`;

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 10rem;
`;

export const HomepageItem = styled.div`
  width: 18rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

export const HomepageImg = styled.img`
  width: 100%;
  height: auto;
`;

export const HomepageItemText = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HomepageTitle = styled.p`
  display: flex;
  align-items: flex-start;
  font-weight: 600;
`;

export const HomepagePrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #c3195d;
`;
