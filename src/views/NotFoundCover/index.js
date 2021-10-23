import loadable from '@loadable/component';
const LoadableComponent = loadable(() => import('./NotFoundCover'));
export default LoadableComponent;
