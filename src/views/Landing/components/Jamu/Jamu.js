/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Jamu = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        component="h2"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Jamu
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        Beras Kencur, Kunir Asem
      </Typography>
    </Box>
  );
};

export default Jamu;
