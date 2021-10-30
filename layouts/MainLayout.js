import Head from 'next/head';
import { Box, CssBaseline, Grid } from '@material-ui/core';
import NavigationBar from '../components/NavigationBar';
import ThemeProvider from '../components/Theme';
import MainContent from '../components/MainContent';
import ProfessionalDescription from '../components/Index/ProfessionalDescription';

const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    height: 'calc(100vh - 50px)',
    marginTop: '50px',
  },
};

const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>Luis Barboza - Portafolio</title>
    </Head>
    <CssBaseline />
    <ThemeProvider>
      <Box sx={styles.pageWrapper}>
        <header>
          <NavigationBar />
        </header>
        <Box sx={styles.content}>
          <Grid container>
            <Grid item xs={12} md={9}>
              <MainContent>{children}</MainContent>
            </Grid>
            <Grid item xs={12} md={3}>
              <ProfessionalDescription />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  </>
);

export default MainLayout;
