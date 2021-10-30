import { Box } from '@material-ui/core';

export default function ScrollableBox({ children }) {
  return (
    <Box
      sx={{
        overflowY: 'scroll',
        height: '100%',
        bgcolor: '#0A1929',
        '@media (max-width: 900px)': {
          overflowY: 'visible',
          height: '100%',
        },
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#888',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}
    >
      {children}
    </Box>
  );
}
