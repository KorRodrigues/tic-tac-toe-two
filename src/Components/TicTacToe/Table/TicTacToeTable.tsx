import { Grid, Card, CardContent } from '@mui/material';
import Piece from '../../Piece/Piece';
import * as S from './styles';

const TicTacToeTable = () => (
  <Card>
    <CardContent>
      <Grid container>
        <S.Cell item xs={4} br bb>
          <Piece size="p" player={0} />
        </S.Cell>
        <S.Cell item xs={4} br bb bl>
          <Piece size="m" player={1} />
        </S.Cell>
        <S.Cell item xs={4} bb bl>
          <Piece size="g" player={0} />
        </S.Cell>
        <S.Cell item xs={4} bt br bb>
          o
        </S.Cell>
        <S.Cell item xs={4} bt br bb bl>
          x
        </S.Cell>
        <S.Cell item xs={4} bt bb bl>
          o
        </S.Cell>
        <S.Cell item xs={4} bt br>
          x
        </S.Cell>
        <S.Cell item xs={4} bt br bl>
          o
        </S.Cell>
        <S.Cell item xs={4} bt bl>
          x
        </S.Cell>
      </Grid>
    </CardContent>
  </Card>
);

export default TicTacToeTable;
