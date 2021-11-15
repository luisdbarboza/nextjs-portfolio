import { Box, Typography, Grid, useTheme } from '@material-ui/core';
import applyStyles from './styles';

export default function ProfessionalDescription() {
  const theme = useTheme();
  const styles = applyStyles(theme);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperFlexbox}>
        <Typography sx={styles.heading}>
          Desarrollador de software fullstack, Stack MERN y PERN
        </Typography>
        <Typography variant="body" sx={styles.footer}>
          <i>
            Actualmente estoy interesado en ofertas que me permitan aplicar mis
            conocimientos en tecnologias de desarrollo modernas para crear
            productos de calidad.
          </i>
        </Typography>
      </Box>
    </Box>
  );
}
