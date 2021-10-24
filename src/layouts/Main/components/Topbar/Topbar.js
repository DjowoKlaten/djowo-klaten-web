import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { StaticImage } from 'gatsby-plugin-image';

import {
  ThemeModeToggler,
} from './components';

const Topbar = ({ onSidebarOpen, pages }) => {
  const theme = useTheme();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Djowo Klaten"
        width={{ xs: 100, md: 120 }}
      >
        <StaticImage
          src="https://assets-djowoklaten.s3.ap-southeast-1.amazonaws.com/djowo-klaten.png"
          height={32}
          alt="Djowo Klaten"
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={2.5}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={1}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://linktr.ee/DjowoKlaten_Pusat"
            size="large"
          >
            Pesan sekarang
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginRight={2}>
          <ThemeModeToggler />
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
};

export default Topbar;
