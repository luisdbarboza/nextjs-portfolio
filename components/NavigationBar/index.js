import { useState } from 'react';
import Link from 'next/link';
import { Box, Stack, Typography, useTheme } from '@material-ui/core';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import links from './linksData';
import applyStyles from './styles';

export default function NavigationBar() {
  const theme = useTheme();
  const styles = applyStyles(theme);
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <Box sx={styles.nav}>
        <Stack {...styles.navStack}>
          <Link href="/">
            <Box sx={styles.linkLogo}>
              <a>
                <Typography variant="h1" sx={styles.logo}>
                  Luis Barboza
                </Typography>
              </a>
            </Box>
          </Link>
          <Stack sx={styles.linksStack}>{links}</Stack>
          <Box sx={styles.menuButton} onClick={() => setOpenNav(!openNav)}>
            {!openNav ? <AiOutlineMenu /> : <AiOutlineClose />}
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          ...styles.linksModalBox,
          [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
            display: openNav ? 'block' : 'none',
          },
        }}
      >
        <Stack
          direction="column"
          alignItems="flex-start"
          sx={{ padding: '1.5rem' }}
        >
          {links}
        </Stack>
      </Box>
    </nav>
  );
}
