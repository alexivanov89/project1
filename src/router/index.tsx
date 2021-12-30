import { FC, lazy, Suspense } from 'react';
import { Route, Switch, RouteProps, Router, Redirect } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { history } from '../store';
const App = lazy(() => import('../pages/App/App'));

interface IMainRouterProps extends RouteProps {}

export const MainRouter: FC<IMainRouterProps> = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Redirect to="/" />
        </Switch>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
