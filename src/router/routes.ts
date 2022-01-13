import { ComponentType, lazy } from 'react';
// import { Event } from '../components/Event';
const Login = lazy(() => import('../components/Login/Login'));
const Event = lazy(() => import('../components/Event/Event'));
const Test = lazy(() => import('../pages/Test/Test'));

export interface IRoute {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
  TEST1 = '/test1',
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, exact: true, component: Login }];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
  { path: RouteNames.TEST1, exact: true, component: Test },
];
