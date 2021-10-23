import loadable from '@loadable/component';
const LoadableComponent = loadable(() => import('./Contact'));
export default LoadableComponent;
