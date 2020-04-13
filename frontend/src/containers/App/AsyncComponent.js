import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading';

export const AsyncLayout = loadable({
    loader: () => import('../../containers/Layout/AppLayoutStaticContainer'),
    loading: LoadingComponent
})

export const AsyncHome = loadable({
    loader: () => import('../../containers/Home'),
    loading: LoadingComponent,
});