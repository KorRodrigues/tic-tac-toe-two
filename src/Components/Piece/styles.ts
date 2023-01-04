import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledCardProps extends CardProps {
  size?: 'p' | 'm' | 'g';
  active?: boolean;
  selected?: boolean;
  player: 0 | 1;
}

export const PieceCard = styled(Card, {
  shouldForwardProp: (prop) => !['size', 'active', 'player', 'selected'].includes(prop.toString()),
})<StyledCardProps>(
  ({ size = 'm', active = true, player, selected, theme: { shadows, palette } }) => ({
    alignItems: 'center',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    border: selected ? '1px solid black' : undefined,
    boxShadow: selected ? shadows[5] : undefined,
    color: palette?.common?.white,
    display: 'flex',
    height: 'auto',
    justifyContent: 'center',
    opacity: active ? 1 : 0.3,
    transition: 'background 1s, box-shadow 2s',
    ...(player === 0 && {
      background: selected ? palette?.secondary?.light : palette?.secondary?.main,
    }),
    ...(player === 1 && {
      background: selected ? palette?.tertiary?.light : palette?.tertiary?.main,
    }),
    ...(size === 'p' && { width: '25%' }),
    ...(size === 'm' && { width: '50%' }),
    ...(size === 'g' && { width: '90%' }),
  })
);
