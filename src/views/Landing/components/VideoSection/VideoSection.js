/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VideoSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color={'primary.contrastText'}
              component={'span'}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              Lihat Liputan "Bikin Laper"
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <StaticImage
              layout="fullWidth"
              objectFit="cover"
              src="https://www.transtv.co.id/layout/ttvnew/src/images/logo/logowhite.png"
              alt="Trans TV"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1}>
            <Box
              component={'iframe'}
              title="OSENG MERCON INI LANGSUNG MEMBASAHI KERONGKONGAN NCESS | BIKIN LAPER (30/9/21) P2"
              width="100%"
              height="100%"
              minHeight={320}
              src="https://www.youtube.com/embed/AK11Ad3BGLs"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              boxShadow={4}
              borderRadius={4}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
