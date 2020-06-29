import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncLayout = loadable({
    loader: () => import('../../containers/Layout/AppLayoutStaticContainer'),
    loading: LoadingComponent
})

export const AsyncAuthLayout = loadable({
    loader: () => import('../../components/Layout/Layout/Auth'),
    loading: LoadingComponent
})

export const AsyncHome = loadable({
    loader: () => import('../../containers/Home'),
    loading: LoadingComponent,
});

export const AsyncLoginForm = loadable({
    loader: () => import('../../containers/Auth/LoginContainer'),
    loading: LoadingComponent,
});