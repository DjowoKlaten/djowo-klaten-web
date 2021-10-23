import loadable from '@loadable/component';
const LoadableComponent = loadable(() => import('./Landing'));
export default LoadableComponent;
