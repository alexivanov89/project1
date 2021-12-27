import { FC, lazy, Suspense } from 'react';
import { Route, Switch, RouteProps, Router } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal';
import { history } from '../store';
const App = lazy(() => import('../pages/App/App'));

interface IMainRouterProps extends RouteProps {}

export const MainRouter: FC<IMainRouterProps> = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
