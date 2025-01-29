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
              Tech skills
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ textAlign: 'justify', fontFamily: 'Fira Sans' }}
            >
              I possess knowledge of many programming languages, databases, frameworks, and tools, like, javascript, python, c++, typescript, postgresql, mongodb, nodejs, angular, react and linux; During my 2 years of experience in web development, i worked on both the frontend and backend side of things, depending on the task, i've created reusable components for a single page application, connected the ui with the server with both rest and graphql apis, integrated third party libraries and apis on a nestjs server, created endpoints, modified microservices, among other things
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
