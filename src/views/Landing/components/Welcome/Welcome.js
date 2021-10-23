/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Welcome = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        component="p"
        align={'center'}
        sx={{
          don: 900,
        }}
      >
        Rumah Makan
      </Typography>
      <Typography
        variant="h1"
        color={'primary'}
        align={'center'}
        gutterBottom
        sx={{
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 900,
        }}
      >
        Djowo Klaten
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Pas di lidah, berkesan di hati.
      </Typography>
    </Box>
  );

  const GridItemPartnersBlock = () => (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {[
        {
          src:
            'https://lelogama.go-jek.com/service_icon_text/gofood_inverse.svg',
          href: 'https://linktr.ee/DjowoKlaten_Pusat',
          color: 'gofood',
        },
        {
          src: 'https://food.grab.com/static/images/logo-grabfood-white.svg',
          href: 'https://linktr.ee/DjowoKlaten_Pusat',
          color: 'grabfood',
        },
        {
          src: 'https://svgshare.com/i/bSB.svg',
          href: 'https://linktr.ee/DjowoKlaten_Pusat',
          color: 'shopeefood',
        },
      ].map((item, i) => (
        <Box key={i} marginRight={2} marginBottom={2}>
          <Button
            variant="contained"
            color={item.color}
            component="a"
            target="blank"
            href={item.href}
            size="medium"
          >
            <Box component="img" src={item.src} height="20px" />
          </Button>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemPartnersBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
