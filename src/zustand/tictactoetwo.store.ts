import { immer } from 'zustand/middleware/immer';
import create from 'zustand';

type Player = 0 | 1;

type Size = 'p' | 'm' | 'g';

type Stash = {
  p: number;
  m: number;
  g: number;
};

type BoardCell = {
  player: Player;
  size: Size;
};

type GameState = {
  game: {
    activePlayer: Player;
    winnerPlayer: Player | null;
    selectedSize: Size | null;
    stash: [Stash, Stash];
    board: [
      [BoardCell | null, BoardCell | null, BoardCell | null],
      [BoardCell | null, BoardCell | null, BoardCell | null],
      [BoardCell | null, BoardCell | null, BoardCell | null]
    ];
  };
  changeActivePlayer: (player: Player) => void;
  selectSize: (size: Size) => void;
  setSizeToBoardAndCheckWin: (boardRow: number, boardColumn: number) => void;
};

const useStore = create<GameState>()(
  immer((set) => ({
    game: {
      activePlayer: 0,
      winnerPlayer: null,
      selectedSize: null,
      stash: [
        {
          p: 3,
          m: 3,
          g: 2,
        },
        {
          p: 3,
          m: 3,
          g: 2,
        },
      ],
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    },
    changeActivePlayer: (player) =>
      set((state: GameState) => {
        state.game.activePlayer = player;
      }),
    selectSize: (size) =>
      set((state: GameState) => {
        const player = state.game.activePlayer;
        if (player != null && state.game.stash[player][size] > 0) state.game.selectedSize = size;
      }),
    setSizeToBoardAndCheckWin: (boardRow, boardColumn) =>
      set((state: GameState) => {
        const board = state.game.board;
        const player = state.game.activePlayer;
        const winner = state.game.winnerPlayer;
        const selectedSize = state.game.selectedSize;
        const actualSize = state.game.board[boardRow][boardColumn]?.size;
        const stash = state.game.stash;

        if (
          winner != null ||
          player == null ||
          selectedSize == null ||
          stash[player][selectedSize] <= 0 ||
          actualSize === 'g' ||
          (actualSize === 'm' && selectedSize !== 'g') ||
          (actualSize === 'p' && selectedSize === 'p')
        )
          return;

        state.game.stash[player][selectedSize] -= 1;
        state.game.selectedSize = null;
        state.game.board[boardRow][boardColumn] = { player, size: selectedSize };

        if (
          (board[0][0]?.player === player &&
            ((board[0][1]?.player === player && board[0][2]?.player === player) || // ->
              (board[1][1]?.player === player && board[2][2]?.player === player) || // -> V
              (board[1][0]?.player === player && board[2][0]?.player === player))) || // V
          (board[1][1]?.player === player &&
            ((board[1][0]?.player === player && board[1][2]?.player === player) || // <->
              (board[0][1]?.player === player && board[2][1]?.player === player) || // ^V
              (board[2][0]?.player === player && board[0][2]?.player === player))) || // ->^
          (board[2][2]?.player === player &&
            ((board[2][0]?.player === player && board[2][1]?.player === player) || // <-
              (board[0][2]?.player === player && board[1][2]?.player === player))) // ^
        ) {
          state.game.winnerPlayer = player;
        } else {
          state.game.activePlayer = state.game.activePlayer === 1 ? 0 : 1;
        }

        // TODO check tie
      }),
  }))
);

export default useStore;
