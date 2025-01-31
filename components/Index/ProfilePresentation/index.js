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
            <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
              <Image
                src="/images/perfil.jpg"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
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
              ¡Hi! my name is Luis and i'm a software engineer
            </Typography>
          </Grid>
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Box sx={styles.skillsAndInterestsBox}>
              <Typography
                variant="h6"
                sx={styles.skillsAndInterestsBox.text.header}
              >
                Skills
              </Typography>
              <Typography
                variant="body2"
                sx={styles.skillsAndInterestsBox.text.body}
              >
                Web application development, angular, nodejs, linux scripting with python, postgresql, autodidact
              </Typography>{' '}
            </Box>
          </Grid>
          <Grid item xs={2} sx={styles.skillsAndInterestsBoxWrapper}>
            <Box sx={styles.skillsAndInterestsBox}>
              <Typography
                variant="h6"
                sx={styles.skillsAndInterestsBox.text.header}
              >
                My interests
              </Typography>
              <Typography
                variant="body2"
                sx={styles.skillsAndInterestsBox.text.body}
              >
                Cross platform apps, learning new skills, game development, 3d graphics, backend development
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
