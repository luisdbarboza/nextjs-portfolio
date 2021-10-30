import { Box, Typography, Grid, useTheme, IconButton } from '@material-ui/core';
import { FaGithub, FaLink } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import ItemsNavigation from '../ItemsNavigation';
import applyStyles from './styles';

export default function ShowcaseItemHeader({
  name,
  repositories,
  liveURL,
  setModalData,
  projectsData,
  item,
  handleClose,
}) {
  const theme = useTheme();
  const styles = applyStyles(theme);
  return (
    <Grid container sx={styles.modalBoxHeader.wrapperBox}>
      <Grid
        item
        container
        xs={4}
        sm={3}
        md={2}
        justifyContent="center"
        alignItem="center"
        // sx={{ border: '1px solid white' }}
      >
        <Grid item xs={12}>
          <Typography sx={styles.modalBoxHeader.title}>{name}</Typography>
        </Grid>
        <Grid item container xs={12} sx={styles.modalBoxHeader.linksBox}>
          {repositories.length > 0 && (
            <Box sx={styles.modalBoxHeader.link}>
              <a target="_blank" href={repositories[0].src} rel="noreferrer">
                <FaGithub />
              </a>
            </Box>
          )}
          {liveURL && (
            <Box sx={styles.modalBoxHeader.link}>
              <a target="_blank" href={liveURL} rel="noreferrer">
                <FaLink />
              </a>
            </Box>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        xs={1}
        sm={3}
        md={4}
        lg={4}
        // sx={{ border: '1px solid blue' }}
      />
      <Grid
        item
        container
        xs={6}
        sm={5}
        md={5}
        justifyContent="center"
        alignItem="center"
        // sx={{ border: '1px solid violet' }}
      >
        <ItemsNavigation
          setModalData={setModalData}
          projectsData={projectsData}
          item={item}
        />
      </Grid>
      <Grid
        item
        container
        xs={1}
        justifyContent="center"
        alignItem="center"
        // sx={{ border: '1px solid red' }}
      >
        <IconButton
          aria-label="Close item window"
          sx={styles.modalBoxHeader.closeButtonWrapper}
          onClick={handleClose}
        >
          <AiFillCloseCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
}
