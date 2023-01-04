import Typography from '@mui/material/Typography';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import shallow from 'zustand/shallow';

import useStore from '../../../zustand/tictactoetwo.store';

const TableState = () => {
  const { activePlayer, winnerPlayer } = useStore(
    (state) => ({
      activePlayer: state.game.activePlayer,
      winnerPlayer: state.game.winnerPlayer,
    }),
    shallow
  );

  return (
    <Typography variant="h4" component="h2" gutterBottom>
      {winnerPlayer != null && (
        <>
          {activePlayer === 0 && <ArrowCircleLeftIcon color="secondary" />}
          Jogador {activePlayer + 1} venceu!
          {activePlayer === 1 && <ArrowCircleRightIcon color="tertiary" />}
        </>
      )}
      {winnerPlayer == null && (
        <>
          {activePlayer === 0 && <ArrowCircleLeftIcon color="secondary" />}
          Turno do Jogador {activePlayer + 1}
          {activePlayer === 1 && <ArrowCircleRightIcon color="tertiary" />}
        </>
      )}
    </Typography>
  );
};
export default TableState;
