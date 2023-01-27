import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import useStore from '../../../zustand/tictactoetwo.store';
import StashBox from './StashBox';

type PlayerStashProps = {
  player: 0 | 1;
};

const PlayerStash = ({ player }: PlayerStashProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const activePlayer = useStore((state) => state.game.activePlayer);

  const isActivePlayer = activePlayer === player;

  return (
    <Card raised={isActivePlayer}>
      <CardHeader
        title={`Jogador ${player + 1}`}
        titleTypographyProps={{ sx: { typography: { sm: 'h4', xs: 'h6' } } }}
      />
      <CardContent>
        <Box
          sx={{
            ...((!isDesktop && {
              display: 'flex',
              flexDirection: 'row',
            }) ||
              undefined),
            opacity: isActivePlayer ? 1 : 0.5,
          }}
        >
          <StashBox player={player} size="g" />

          <Divider orientation={isDesktop ? 'horizontal' : 'vertical'} variant="middle" flexItem />

          <StashBox player={player} size="m" />

          <Divider orientation={isDesktop ? 'horizontal' : 'vertical'} variant="middle" flexItem />

          <StashBox player={player} size="p" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlayerStash;
