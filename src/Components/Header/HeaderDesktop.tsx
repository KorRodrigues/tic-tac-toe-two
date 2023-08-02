import { Toolbar, Typography, Box, Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

import pages from './headerPages';

const HeaderDesktop = () => (
  <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' } }}>
    <TagIcon sx={{ mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Jogo da Velha 2
    </Typography>
    <Box sx={{ flexGrow: 1 }} display="flex">
      {pages.map((page, index) => (
        <Button key={index} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  </Toolbar>
);

export default HeaderDesktop;
