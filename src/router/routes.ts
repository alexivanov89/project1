import { ComponentType, lazy } from 'react';
const Login = lazy(() => import('../components/Login/Login'));
const Event = lazy(() => import('../components/Event/Event'));
const Test = lazy(() => import('../pages/Test/Test'));

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
  subRoutes?: IRoute[];
  title?: string;
  description?: string;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
  TEST1 = '/test1',
  TEST11 = '/test1.1',
  TEST12 = '/test1.2',
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, exact: true, component: Login }];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
  {
    path: RouteNames.TEST1,
    exact: true,
    component: Test,
    subRoutes: [
      { path: RouteNames.TEST11, exact: true, component: Test },
      { path: RouteNames.TEST12, exact: true, component: Test },
    ],
  },
];
