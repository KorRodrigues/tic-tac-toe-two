import { useState } from 'react';
import { Toolbar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TagIcon from '@mui/icons-material/Tag';

import pages from './headerPages';

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = ({ currentTarget }: React.MouseEvent<HTMLElement>) =>
    setIsMenuOpen(currentTarget);
  const handleCloseNavMenu = () => setIsMenuOpen(null);

  return (
    <Toolbar disableGutters sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Box sx={{ flexGrow: 1 }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-header"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-header"
          anchorEl={isMenuOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={!!isMenuOpen}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <TagIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Jogo da Velha 2
      </Typography>
    </Toolbar>
  );
};

export default HeaderMobile;
