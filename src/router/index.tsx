import { FC, Suspense } from 'react';
import { Route, Switch, RouteProps, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { IRoute, privateRoutes, publicRoutes, RouteNames } from './routes';
import { Layout } from '../components/Layout';
import { ErrorBoundary } from 'react-error-boundary';
import { Typography } from '@mui/material';
import { useAppSelector } from '../store';

interface IMainRouterProps extends RouteProps {}

const routeItem = (route: IRoute) => (
  <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
);

export const MainRouter: FC<IMainRouterProps> = () => {
  const { isAuth } = useAppSelector(({ auth }) => auth);

  return (
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        {isAuth ? (
          <Layout>
            <ErrorBoundary
              fallback={
                <Typography variant="h3" component="h2" color="black" align="center">
                  Что-то пошло не так...
                </Typography>
              }
            >
              <Switch>
                {privateRoutes.map((route) => (
                  <Route
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    key={route.path}
                  />
                ))}
                <Redirect to={RouteNames.EVENT} />
              </Switch>
            </ErrorBoundary>
          </Layout>
        ) : (
          <Switch>
            {publicRoutes.map((route) =>
              route.subRoutes
                ? route.subRoutes.map((subRoute) => routeItem(subRoute))
                : routeItem(route),
            )}
            <Redirect to={RouteNames.LOGIN} />
          </Switch>
        )}
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
