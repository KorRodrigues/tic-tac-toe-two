import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledCardProps extends CardProps {
  size?: 'p' | 'm' | 'g';
  active?: boolean;
  player: 1 | 2;
}

export const PieceCard = styled(Card, {
  shouldForwardProp: (prop) => !['size', 'active', 'player'].includes(prop.toString()),
})<StyledCardProps>(({ size = 'm', active = true, player, theme }) => ({
  alignItems: 'center',
  aspectRatio: '1 / 1',
  borderRadius: '50%',
  color: theme.palette?.common?.white,
  display: 'flex',
  justifyContent: 'center',
  ...(player === 1 && { background: theme.palette?.secondary?.main }),
  ...(player === 2 && { background: theme.palette?.tertiary?.main }),
  ...(size === 'p' && { width: '25%' }),
  ...(size === 'm' && { width: '50%' }),
  ...(size === 'g' && { width: '90%' }),
  ...(!active && { opacity: '0.3' }),
}));
