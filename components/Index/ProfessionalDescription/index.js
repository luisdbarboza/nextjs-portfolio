import { Box, Typography, Grid, useTheme } from '@material-ui/core';
import applyStyles from './styles';

export default function ProfessionalDescription() {
  const theme = useTheme();
  const styles = applyStyles(theme);
  return (
    <Box sx={styles.wrapper}>
      <Grid container direction="column" sx={{ height: '100%' }}>
        <Grid item xs={1} lg={1} />
        <Grid item xs={3} lg={3} sx={styles.headingWrapper}>
          <Typography sx={styles.heading}>
            Desarrollador de software fullstack, Stack MERN y PERN
          </Typography>
        </Grid>
        <Grid item xs={0} lg={3} />
        <Grid container item direction="column" xs={3} sx={{ padding: '1rem' }}>
          <Grid item xs={6} lg={6}>
            <Typography variant="body" sx={styles.footer}>
              <i>
                Actualmente estoy interesado en ofertas que me permitan aplicar
                mis conocimientos en tecnologias de desarrollo modernas para
                crear productos de calidad.
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
