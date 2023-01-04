import { Grid } from '@mui/material';
import PlayerStash from '../PlayerStash';
import TicTacToeTable from '../Table';
import TableState from '../TableState';

const TicTacToeTwo = () => (
  <Grid container maxWidth="lg" spacing={2}>
    <Grid item xs={12} display="flex" justifyContent="center">
      <TableState />
    </Grid>
    <Grid item xs={12} md={3} lg={2}>
      <PlayerStash player={0} />
    </Grid>
    <Grid item xs={12} md={6} lg={8}>
      <TicTacToeTable />
    </Grid>
    <Grid item xs={12} md={3} lg={2}>
      <PlayerStash player={1} />
    </Grid>
  </Grid>
);

export default TicTacToeTwo;
