import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer } from './components';
import pages from '../navigation';

const Main = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: alpha(theme.palette.background.paper, 0.7),
          backdropFilter: 'blur(20px)',
          boxShadow: `inset 0px -1px 1px ${theme.palette.alternate.dark}`,
        }}
        elevation={0}
      >
        <Container paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Box height={{ xs: 58, sm: 66 }} />
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
