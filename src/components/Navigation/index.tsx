import { Nav } from './Nav';
import { NavItem } from './NavItem';

function Navigation() {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/clothing">Clothing</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Nav>
  );
}

export default Navigation;
