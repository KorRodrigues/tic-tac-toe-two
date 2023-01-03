import * as S from './styles';
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

type PieceProps = {
  size?: 'p' | 'm' | 'g';
  active?: boolean;
  selected?: boolean;
  player: 1 | 2;
};

const Piece = ({ size, active, player, selected }: PieceProps) => (
  <S.PieceCard
    size={size}
    active={active}
    player={player}
    variant={selected ? 'outlined' : 'elevation'}
  >
    {player === 1 && <ClearIcon aria-label={`Peça ${size} do jogador 1`} />}
    {player === 2 && <PanoramaFishEyeIcon aria-label={`Peça ${size} do jogador 2`} />}
  </S.PieceCard>
);

export default Piece;
