import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledGridProps extends GridProps {
  bt?: boolean;
  br?: boolean;
  bb?: boolean;
  bl?: boolean;
}

export const Cell = styled(Grid, {
  shouldForwardProp: (prop) => !['bt', 'br', 'bb', 'bl'].includes(prop.toString()),
})<StyledGridProps>(({ bt, br, bb, bl, theme }) => ({
  alignItems: 'center',
  aspectRatio: '1 / 1',
  border: '2px solid transparent',
  display: 'flex',
  justifyContent: 'center',
  ...(bt && { borderTopColor: theme.palette.divider }),
  ...(br && { borderRightColor: theme.palette.divider }),
  ...(bb && { borderBottomColor: theme.palette.divider }),
  ...(bl && { borderLeftColor: theme.palette.divider }),
}));
