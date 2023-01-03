import { Box, Card, CardContent, CardHeader, Divider } from '@mui/material';

import Piece from '../../Piece/Piece';

type PlayerStashProps = {
  player: 1 | 2;
};

const PlayerStash = ({ player }: PlayerStashProps) => (
  <Card>
    <CardHeader title={`Jogador ${player}`} />
    <CardContent>
      <Box display="flex" justifyContent="center" my={2}>
        <Piece size="g" active={true} player={player} />
      </Box>
      <Divider />
      <Box display="flex" justifyContent="center" my={4}>
        <Piece size="m" active={true} player={player} />
      </Box>
      <Divider />
      <Box display="flex" justifyContent="center" my={6}>
        <Piece size="p" active={true} player={player} />
      </Box>
      <Divider />
    </CardContent>
  </Card>
);

export default PlayerStash;
