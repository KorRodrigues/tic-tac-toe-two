import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Player from '../PlayerStash';
import TicTacToeTable from '../Table';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const TicTacToeTwo = () => (
  <Grid container maxWidth="lg" spacing={2}>
    <Grid item xs={12} display="flex" justifyContent="center">
      <Typography variant="h4" component="h2" gutterBottom>
        <ArrowCircleLeftIcon color="secondary" />
        Turno do Jogador 1
        <ArrowCircleRightIcon color="tertiary" />
      </Typography>
    </Grid>
    <Grid item xs={12} md={3} lg={2}>
      <Player player={1} />
    </Grid>
    <Grid item xs={12} md={6} lg={8}>
      <TicTacToeTable />
    </Grid>
    <Grid item xs={12} md={3} lg={2}>
      <Player player={2} />
    </Grid>
  </Grid>
);

export default TicTacToeTwo;
