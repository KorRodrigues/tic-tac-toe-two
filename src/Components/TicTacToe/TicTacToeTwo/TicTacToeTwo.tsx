import { Grid } from '@mui/material';
import Player from '../Player';
import TicTacToeTable from '../Table';

const TicTacToeTwo = () => (
  <Grid container maxWidth="xl" spacing={4}>
    <Grid item xs={3}>
      <Player playerN={1} />
    </Grid>
    <Grid item xs={6}>
      <TicTacToeTable />
    </Grid>
    <Grid item xs={3}>
      <Player playerN={2} />
    </Grid>
  </Grid>
);

export default TicTacToeTwo;
