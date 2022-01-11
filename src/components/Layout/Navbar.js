import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, useMediaQuery, Typography } from '@mui/material';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function Navbar({ onOpenSidebar }) {
  const hidden = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <ToolbarStyle>
        {hidden ? null : (
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            {/* <Icon icon={} /> */}
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Typography variant="h2" color="initial">
            test1
          </Typography>
          <Typography variant="h2" color="initial">
            test2
          </Typography>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
