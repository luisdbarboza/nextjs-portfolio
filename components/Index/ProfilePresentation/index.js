import Image from 'next/image';
import { Box, Avatar, Grid, Typography, useTheme } from '@material-ui/core';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import applyStyles from './styles';

export default function ProfilePresentation() {
  const theme = useTheme();
  const styles = applyStyles(theme);
  return (
    <Grid
      container
      sx={{
        minHeight: 'max-content',
      }}
    >
      <Grid item xs={12} md={6}>
        <Box sx={styles.profilePhotoWrapper}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              '@media (max-width: 900px)': {
                width: '70%',
                margin: 'auto',
              },
              '@media (max-width: 600px)': {
                width: '90%',
                margin: 'auto',
              },
            }}
          >
            <Image
              src="/images/foto_perfil.jpg"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Box>
        </Box>
      </Grid>
      <Grid container item justifyContent="center" xs={12} md={6}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: '2rem',
            color: 'white',
            maxWidth: '500px',
            height: 'max-content',
          }}
        >
          <Grid item xs={1} />
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Typography
              sx={styles.skillsAndInterestsBox.text.presentationHeader}
            >
              ¡Hola! mi nombre es Luis y soy ingeniero en informática
            </Typography>
          </Grid>
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Box sx={styles.skillsAndInterestsBox}>
              <Typography
                variant="h6"
                sx={styles.skillsAndInterestsBox.text.header}
              >
                Habilidades
              </Typography>
              <Typography
                variant="body2"
                sx={styles.skillsAndInterestsBox.text.body}
              >
                Desarrollo de aplicaciones web, administracion de sistemas
                linux, bases de datos relacionales y noSQL, autodidacta
              </Typography>{' '}
            </Box>
          </Grid>
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Box sx={styles.skillsAndInterestsBox}>
              <Typography
                variant="h6"
                sx={styles.skillsAndInterestsBox.text.header}
              >
                Intereses
              </Typography>
              <Typography
                variant="body2"
                sx={styles.skillsAndInterestsBox.text.body}
              >
                Aplicaciones multiplataforma, Aprender nuevas tecnologias,
                Ciencia, Investigar
              </Typography>{' '}
            </Box>
          </Grid>
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Box sx={styles.skillsAndInterestsBox}>
              <Typography
                variant="h6"
                sx={styles.skillsAndInterestsBox.text.header}
              >
                Links
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={styles.avatar.socialMediaIconWrapper}>
                  <a
                    href="https://www.linkedin.com/in/luis-david-barboza-navarro-4093b9212"
                    target="_blank"
                  >
                    <FaLinkedin style={styles.avatar.socialMediaIcon} />
                  </a>
                </Box>
                <Box sx={styles.avatar.socialMediaIconWrapper}>
                  <a
                    href="https://github.com/luisdbarboza"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub style={styles.avatar.socialMediaIcon} />
                  </a>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </Grid>
  );
}
