import React from 'react';
import NotFoundCover from 'views/NotFoundCover';
import loadable from '@loadable/component';
const FourOFourPage = () => {
  return <NotFoundCover />;
};

export default loadable(FourOFourPage);
