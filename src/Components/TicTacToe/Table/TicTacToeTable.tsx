import { Grid, Card, CardContent } from '@mui/material';
import shallow from 'zustand/shallow';

import Piece from '../../Piece/Piece';
import * as S from './styles';

import useStore from '../../../zustand/tictactoetwo.store';

const TicTacToeTable = () => {
  const { board, setSizeToBoardAndCheckWin } = useStore(
    (state) => ({
      board: state.game.board,
      setSizeToBoardAndCheckWin: state.setSizeToBoardAndCheckWin,
    }),
    shallow
  );

  return (
    <Card>
      <CardContent>
        <Grid container>
          {board.map((row, rowIndex) =>
            row.map((column, columnIndex) => (
              <S.Cell
                key={`${rowIndex}-${columnIndex}`}
                item
                xs={4}
                bt={rowIndex !== 0}
                bb={rowIndex !== 2}
                bl={columnIndex != 0}
                br={columnIndex != 2}
                onClick={() => {
                  setSizeToBoardAndCheckWin(rowIndex, columnIndex);
                }}
              >
                {column && <Piece size={column.size} player={column.player} />}
              </S.Cell>
            ))
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TicTacToeTable;
