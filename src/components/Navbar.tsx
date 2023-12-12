import { Menu, MenuItem } from '../StyledComponents';

function Navbar() {
  return (
    <Menu>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/women">Women</MenuItem>
      <MenuItem to="/men">Men</MenuItem>
      <MenuItem to="/accessories">Accessories</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Menu>
  );
}

export default Navbar;
