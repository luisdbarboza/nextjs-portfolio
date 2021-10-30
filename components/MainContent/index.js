import { Box } from '@material-ui/core';
import ScrollableBox from '../ScrollableBox';

export default function MainContent({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 50px)',
        '@media (max-width: 900px)': {
          height: '100%',
        },
      }}
    >
      <ScrollableBox>{children}</ScrollableBox>
    </Box>
  );
}
