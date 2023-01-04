import * as S from './styles';
import ClearIcon from '@mui/icons-material/Clear';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

type PieceProps = {
  size?: 'p' | 'm' | 'g';
  active?: boolean;
  selected?: boolean;
  player: 0 | 1;
};

const Piece = ({ size, active, player, selected }: PieceProps) => (
  <S.PieceCard size={size} active={active} player={player} selected={selected}>
    {player === 0 && <ClearIcon aria-label={`Peça ${size} do jogador 1`} />}
    {player === 1 && <PanoramaFishEyeIcon aria-label={`Peça ${size} do jogador 2`} />}
  </S.PieceCard>
);

export default Piece;
