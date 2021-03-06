import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import MieJawa from './components/MieJawa';
import { StaticImage } from 'gatsby-plugin-image';
import VideoSection from './components/VideoSection';
import Jamu from './components/Jamu';

const Agency = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('contact')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="mie-jawa"
      >
        <StaticImage
          className="jarallax-img"
          src="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/food/sajian-4"
          alt="Mie Godog"
          loading="lazy"
          quality={70}
        />
        <Container>
          <MieJawa />
        </Container>
      </Box>
      <Box bgcolor={'primary.main'}>
        <Container>
          <VideoSection />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="jamu"
      >
        <StaticImage
          className="jarallax-img"
          src="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/food/sajian-2"
          alt="Jamu"
          loading="lazy"
          quality={70}
        />
        <Container>
          <Jamu />
        </Container>
      </Box>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
        id="contact"
      >
        <Container>
          <Contact />
        </Container>
      </Box>
    </Main>
  );
};

export default Agency;
