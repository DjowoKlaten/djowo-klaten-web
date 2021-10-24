import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import { WhatsApp } from '@mui/icons-material';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Djowo Klaten"
            width={80}
          >
            <StaticImage
              src="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/djowo-klaten.png"
              height="32"
              alt="Djowo Klaten"
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <IconButton
                aria-label="instagram"
                href="https://www.instagram.com/djowo_klaten/"
              >
                <Instagram />
              </IconButton>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <IconButton
                aria-label="whatsapp"
                href="https://wa.me/c/6287774833596"
              >
                <WhatsApp />
              </IconButton>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                href="https://linktr.ee/DjowoKlaten_Pusat"
                size="small"
              >
                Pesan sekarang
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; {new Date().getFullYear()} Djowo Klaten. Djowo Klaten is a
          trademark of CV. Rahma Lintang Larasati.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
