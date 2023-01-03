import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 3 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/KorRodrigues">
        Tiago "Kor" Rodrigues
      </Link>
      {' 2023.'}
    </Typography>
  </Box>
);

export default Footer;
