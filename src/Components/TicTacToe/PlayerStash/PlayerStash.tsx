import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Piece from '../../Piece/Piece';

type PlayerStashProps = {
  player: 0 | 1;
};

const PlayerStash = ({ player }: PlayerStashProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardHeader title={`Jogador ${player}`} />
      <CardContent>
        <Box
          sx={
            (!isDesktop && {
              display: 'flex',
              flexDirection: 'row',
            }) ||
            undefined
          }
        >
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="center"
            my={isDesktop ? 2 : 0}
            mx={!isDesktop ? 2 : 0}
          >
            <Piece size="g" active={true} player={player} />
          </Box>

          <Divider orientation={isDesktop ? 'horizontal' : 'vertical'} variant="middle" flexItem />

          <Box
            display="flex"
            flexGrow={1}
            justifyContent="center"
            mx={!isDesktop ? 2 : 0}
            my={isDesktop ? 4 : 0}
          >
            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
              <Piece size="m" active={true} player={player} />
            </Box>
          </Box>

          <Divider orientation={isDesktop ? 'horizontal' : 'vertical'} variant="middle" flexItem />

          <Box
            display="flex"
            flexGrow={1}
            justifyContent="center"
            mx={!isDesktop ? 2 : 0}
            my={isDesktop ? 6 : 0}
          >
            <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
              <Piece size="p" active={true} player={player} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlayerStash;
