import { Grid, Card, CardContent } from '@mui/material';
import * as S from './styles';

const TicTacToeTable = () => (
  <Card>
    <CardContent>
      <Grid container>
        <S.Cell item xs={4} br bb>
          x
        </S.Cell>
        <S.Cell item xs={4} br bb bl>
          0
        </S.Cell>
        <S.Cell item xs={4} bb bl>
          x
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
