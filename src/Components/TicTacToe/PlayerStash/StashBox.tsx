import { Box, useMediaQuery, useTheme } from '@mui/material';
import shallow from 'zustand/shallow';

import useStore from '../../../zustand/tictactoetwo.store';
import Piece from '../../Piece/Piece';

import { BoxBadge } from './styles';

type StashBoxProps = {
  player: 0 | 1;
  size: 'p' | 'm' | 'g';
};

const StashBox = ({ player, size }: StashBoxProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { stash, activePlayer, selectedSize, selectSize } = useStore(
    (state) => ({
      stash: state.game.stash[player],
      activePlayer: state.game.activePlayer,
      selectedSize: state.game.selectedSize,
      selectSize: state.selectSize,
    }),
    shallow
  );

  const sizeQuantity = stash[size];
  const isActivePlayer = activePlayer === player;
  const isSelectedSize = isActivePlayer && selectedSize === size;

  return (
    <Box
      display="flex"
      flexGrow={1}
      justifyContent="center"
      my={isDesktop ? 2 : 0}
      mx={!isDesktop ? 2 : 0}
      onClick={isActivePlayer ? () => selectSize(size) : undefined}
    >
      <BoxBadge badgeContent={sizeQuantity} color="info">
        <Piece size={size} active={!!sizeQuantity} player={player} selected={isSelectedSize} />
      </BoxBadge>
    </Box>
  );
};

export default StashBox;
