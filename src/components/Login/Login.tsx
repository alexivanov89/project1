import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography, useMediaQuery } from '@mui/material';
import { LoginForm } from '../LoginForm';

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0, 0),
}));

const Login: FC = () => {
  const theme = useTheme();
  const matchesUpMd = useMediaQuery(theme.breakpoints.up('md'));
  console.log(theme);
  return (
    <RootStyle>
      {matchesUpMd && (
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Привет, заходи.
          </Typography>
          <img src="https://picsum.photos/seed/picsum/480/360" alt="login" />
        </SectionStyle>
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
              Sign in
            </Typography>
          </Stack>
          <LoginForm />
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Нет аккаунта?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to="register">
              Начало работы
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
