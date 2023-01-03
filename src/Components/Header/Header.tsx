import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => (
  <AppBar position="relative">
    <Container maxWidth="lg">
      <HeaderMobile />
      <HeaderDesktop />
    </Container>
  </AppBar>
);

export default Header;
