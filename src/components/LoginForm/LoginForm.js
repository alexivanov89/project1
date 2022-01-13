import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { RouteNames } from '../../router/routes';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { login } from '../../store/reducers/authReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const LoginForm = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector(({ auth }) => auth);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('должен быть email address').required('Email обязательное поле'),
    password: Yup.string().required('Password обязательное поле'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      dispatch(login('test@test.com', '12345'));
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          {error && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" color="red">
                {error}
              </Typography>
            </Box>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Запомнить меня"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Забыли пароль?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isLoading}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
