import loadable from '@loadable/component';
const LoadableComponent = loadable(() => import('./ServerError'));
export default LoadableComponent;
