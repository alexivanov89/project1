import { FC, lazy, Suspense } from 'react';
import { Route, Switch, RouteProps, Router, Redirect } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { createBrowserHistory } from 'history';
import { privateRoutes, publicRoutes, RouteNames } from './routes';
import { Layout } from '../components/Layout';
import { useTypedSelector } from '../hooks/useTypedSelector';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Test = lazy(() => import('../pages/Test/Test'));
export const history = createBrowserHistory();

interface IMainRouterProps extends RouteProps {}

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
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
              />
            ))}
            <Redirect to={RouteNames.LOGIN} />
          </Switch>
        )}
        {/* {auth ? (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/test1" component={Test1} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/test2" component={Test2} />
          </Switch>
        )} */}
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
