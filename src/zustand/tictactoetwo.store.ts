import { immer } from 'zustand/middleware/immer';
import create from 'zustand';

type Player = 0 | 1;

type Size = 'p' | 'm' | 'g';

type Stash = {
  p: number;
  m: number;
  g: number;
};

type BoardName = '_1_1' | '_1_2' | '_1_3' | '_2_1' | '_2_2' | '_2_3' | '_3_1' | '_3_2' | '_3_3';

type BoardCell = {
  player: Player;
  size: Size;
};

type GameState = {
  game: {
    activePlayer: Player | null;
    selectedSize: Size | null;
    stash: [Stash, Stash];
    board: {
      _1_1: BoardCell | null;
      _1_2: BoardCell | null;
      _1_3: BoardCell | null;
      _2_1: BoardCell | null;
      _2_2: BoardCell | null;
      _2_3: BoardCell | null;
      _3_1: BoardCell | null;
      _3_2: BoardCell | null;
      _3_3: BoardCell | null;
    };
  };
};

const useStore = create<GameState>()(
  immer((set, get) => ({
    game: {
      activePlayer: 1,
      selectedSize: null,
      stash: [
        {
          p: 4,
          m: 3,
          g: 2,
        },
        {
          p: 4,
          m: 3,
          g: 2,
        },
      ],
      board: {
        _1_1: null,
        _1_2: null,
        _1_3: null,
        _2_1: null,
        _2_2: null,
        _2_3: null,
        _3_1: null,
        _3_2: null,
        _3_3: null,
      },
    },
    changeActivePlayer: (player: Player | null) =>
      set((state: GameState) => {
        state.game.activePlayer = player;
      }),
    changeReduceFromStash: (player: Player, size: Size) =>
      set((state: GameState) => {
        state.game.stash[player][size] -= 1;
      }),
    selectSize: (player: Player, size: Size) =>
      set((state: GameState) => {
        if (state.game.stash[player][size] > 0) state.game.selectedSize = size;
      }),
    setSizeToBoard: (player: Player, size: Size, boardName: BoardName) =>
      set((state: GameState) => {
        const actualSize = state.game.board[boardName]?.size;

        if (
          actualSize === 'g' ||
          (actualSize === 'm' && size === 'g') ||
          (actualSize === 'p' && size !== 'p')
        )
          return;

        state.game.selectedSize = null;
        state.game.activePlayer = state.game.activePlayer === 1 ? 0 : 1;
        state.game.board[boardName] = { player, size };
      }),
    checkWin: () =>
      set((state: GameState) => {
        const checkPlayer = state.game.activePlayer === 1 ? 0 : 1;
        const board = state.game.board;
      }),
  }))
);

export default useStore;
