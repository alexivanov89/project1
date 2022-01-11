import { FC, lazy, Suspense } from 'react';
import { Route, Switch, RouteProps, Router } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { history } from '../store';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Test = lazy(() => import('../pages/Test/Test'));

interface IMainRouterProps extends RouteProps {}

export const MainRouter: FC<IMainRouterProps> = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test" component={Test} />
        </Switch>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
