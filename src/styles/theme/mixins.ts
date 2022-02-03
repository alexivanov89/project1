import { CSSObject, Theme } from '@mui/material';
import { drawerWidth } from '../../components/Layout/constants';

// export const navOpenedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

export const mixins = {
  toolbar: {
    minHeight: 56,
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: 48,
    },
    '@media (min-width:600px)': {
      minHeight: 64,
    },
  },
};
