import { ReactNode, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { drawerWidth } from './constants';
import { DrawerHeader } from './SideBar/SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} onClick={handleToggle} />
      <SideBar open={open} onClick={handleToggle} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </div>
  );
};

export default Layout;
