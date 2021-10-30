import { Box, Grid, Typography } from '@material-ui/core';
import icons from './skillsIcons';
import styles from './styles';

export default function Skills() {
  return (
    <Grid container sx={styles.exteriorWrapper}>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" sx={styles.descriptionWrapper}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography
              variant="h4"
              color="white"
              sx={{ fontFamily: 'Fira Sans' }}
            >
              Tecnologías
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: 'justify', fontFamily: 'Fira Sans' }}
            >
              Durante mi carrera, decidí enfocarme en aprender tecnologías de
              desarrollo web modernas que me permitieran crear sistemas
              multiplataforma, esto me llevo a aprender ReactJS, NodeJS,
              ExpressJS, Sass, Material UI, Linux y actualmente me gustaría
              aprender React Native y aplicaciones web progresivas(PWA).
            </Typography>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={styles.iconsBoxWrapper}
        >
          {icons.map((Icon, index) => (
            <Grid item xs={3} key={index}>
              <div style={styles.iconBox}>
                <Icon key={index} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
