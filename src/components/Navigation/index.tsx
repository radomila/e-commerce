import { Nav } from './Nav';
import { NavItem } from './NavItem';

function Navigation() {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/women">Women</NavItem>
      <NavItem to="/men">Men</NavItem>
      <NavItem to="/accessories">Accessories</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  );
}

export default Navigation;
