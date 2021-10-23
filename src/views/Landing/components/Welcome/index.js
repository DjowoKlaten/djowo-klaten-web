import loadable from '@loadable/component';
const LoadableComponent = loadable(() => import('./Welcome'));
export default LoadableComponent;
