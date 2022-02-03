import { FC, Suspense } from 'react';
import { Route, Switch, RouteProps, Router, Redirect } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { createBrowserHistory } from 'history';
import { IRoute, privateRoutes, publicRoutes, RouteNames } from './routes';
import { Layout } from '../components/Layout';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const history = createBrowserHistory();

interface IMainRouterProps extends RouteProps {}

const routeItem = (route: IRoute) => (
  <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
);

export const MainRouter: FC<IMainRouterProps> = () => {
  const { isAuth } = useTypedSelector(({ auth }) => auth);

  return (
    <Router history={history}>
      <Suspense fallback={<div>Загрузка...</div>}>
        {isAuth ? (
          <Layout>
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
