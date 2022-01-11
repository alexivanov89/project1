import { ReactNode, useState } from 'react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from './Navbar';
import Sidebar from './SideBar';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
  main: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

export const SiteLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Navbar onOpenSidebar={() => setOpen(true)} />
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
