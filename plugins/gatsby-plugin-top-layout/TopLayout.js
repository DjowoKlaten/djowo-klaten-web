import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/djowo-klaten.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Djowo Klaten</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Rumah makan djowo klaten, penyetan dan mie jawa. Pas di lidah, berkesan di hati."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/djowo-klaten.png"
        />
        <meta
          property="og:title"
          content="Djowo Klaten"
        />
        <meta
          property="og:description"
          content="Rumah makan djowo klaten, penyetan dan mie jawa. Pas di lidah, berkesan di hati."
        />
        <meta
          property="og:url"
          content="https://djowoklaten.id"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Page>
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
