import { Grid, useMediaQuery, useTheme } from '@mui/material';
import useStore from '../../../zustand/tictactoetwo.store';
import PlayerStash from '../PlayerStash';
import TicTacToeTable from '../Table';
import TableState from '../TableState';

const TicTacToeTwo = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const activePlayer = useStore((state) => state.game.activePlayer);

  return (
    <Grid container maxWidth="lg" spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <TableState />
      </Grid>
      <Grid item xs={12} md={3} lg={2} display={isDesktop || activePlayer === 0 ? 'block' : 'none'}>
        <PlayerStash player={0} />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        lg={2}
        display={isDesktop || activePlayer === 1 ? 'block' : 'none'}
        order={isDesktop ? 3 : 0}
      >
        <PlayerStash player={1} />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <TicTacToeTable />
      </Grid>
    </Grid>
  );
};

export default TicTacToeTwo;
