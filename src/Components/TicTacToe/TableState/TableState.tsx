// @ts-nocheck
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
    <Typography component="h2" gutterBottom sx={{ typography: { sm: 'h4', xs: 'h6' } }}>
      {winnerPlayer != null && (
        <>
          {activePlayer === 0 && (
            <ArrowCircleLeftIcon color="secondary" fontSize="inherit" sx={{ mb: '-3px' }} />
          )}
          Jogador {activePlayer + 1} venceu!
          {activePlayer === 1 && (
            <ArrowCircleRightIcon color="tertiary" fontSize="inherit" sx={{ mb: '-3px' }} />
          )}
        </>
      )}
      {winnerPlayer == null && (
        <>
          {activePlayer === 0 && (
            <ArrowCircleLeftIcon color="secondary" fontSize="inherit" sx={{ mb: '-3px' }} />
          )}
          Turno do Jogador {activePlayer + 1}
          {activePlayer === 1 && (
            <ArrowCircleRightIcon color="tertiary" fontSize="inherit" sx={{ mb: '-3px' }} />
          )}
        </>
      )}
    </Typography>
  );
};
export default TableState;
