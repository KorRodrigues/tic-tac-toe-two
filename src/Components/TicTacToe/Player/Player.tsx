import CardHeader from '@mui/material/CardHeader';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { ReactElement, JSXElementConstructor, ReactFragment } from 'react';

type PlayerProps = {
  playerN: number | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment;
};

const Player = ({ playerN }: PlayerProps) => (
  <Card>
    <CardHeader title={`Jogador ${playerN}`} />
    <CardContent>
      Grande
      <Divider />
      Medio
      <Divider />
      Pequeno
      <Divider />
    </CardContent>
  </Card>
);

export default Player;
