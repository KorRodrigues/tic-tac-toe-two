import { Badge, BadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxBadge = styled(Badge)<BadgeProps>(() => ({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));
