import * as React from 'react';
import Container from '@mui/material/Container';

import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import TicTacToeTwo from '../src/Components/TicTacToe/TicTacToeTwo';

export default function Home() {
  return (
    <>
      <Header />

      <Container
        component="main"
        sx={{
          bgcolor: 'background.paper',
          pt: 4,
          pb: 6,
        }}
      >
        <TicTacToeTwo />
      </Container>

      <Footer />
    </>
  );
}
