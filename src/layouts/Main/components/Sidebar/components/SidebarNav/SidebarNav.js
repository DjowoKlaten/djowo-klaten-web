import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { StaticImage } from 'gatsby-plugin-image';

const SidebarNav = ({ pages }) => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Djowo Klaten"
          width={{ xs: 100, md: 120 }}
        >
          <StaticImage
            src="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/djowo-klaten.png"
            height="32"
            alt="Djowo Klaten"
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://linktr.ee/DjowoKlaten_Pusat"
          >
            Pesan sekarang
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
