import Image from 'next/image';
import { Grid, Box, useTheme, Typography } from '@material-ui/core';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md';
import applyStyles from './styles';
import useCarrousel from '../../../hooks/useCarrousel';

export default function ShowcaseItemModalBody({
  images,
  description,
  year,
  tags
}) {
  const [
    { numberOfItems: numberOfImages, currentItem: currentImage },
    setCarrousel
  ] = useCarrousel(images);
  const theme = useTheme();
  const styles = applyStyles(theme);

  return (
    <Grid container sx={styles.modalBoxBody}>
      <Grid item container xs={12} md={8}>
        <Grid
          item
          container
          alignItems="center"
          sx={styles.modalBoxBody.currentImageGridWrapper}
        >
          <Grid sx={styles.modalBoxBody.currentImageWrapper}>
            {images.length - 1 >= currentImage && (
              <Image src={images[currentImage]} layout="fill" />
            )}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.modalBoxBody.carrouselInputPanel}
        >
          <Grid item sx={styles.modalBoxBody.carrouselInputPanel.arrows}>
            <MdOutlineArrowBackIosNew
              onClick={() => setCarrousel('PREVIOUS')}
            />
          </Grid>
          {images.length - 1 >= currentImage &&
            images.map((image) => (
              <Grid
                item
                key={image}
                sx={{
                  ...styles.modalBoxBody.carrouselInputPanel.imageBox,
                  boxShadow:
                    image === images[currentImage]
                      ? '0px 0px 5px gray'
                      : '0px 0px 0px gray'
                }}
              >
                <Image src={image} layout="fill" objectFit="cover" />
              </Grid>
            ))}
          <Grid item sx={styles.modalBoxBody.carrouselInputPanel.arrows}>
            <MdOutlineArrowForwardIos onClick={() => setCarrousel('NEXT')} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={4}
        direction="column"
        alignItems="flex-start"
      >
        <Grid item container sx={styles.modalBoxBody.tagsWrapper}>
          {tags.map((tag, index) => (
            <Grid
              key={index}
              item
              justifyContent="center"
              direction="column"
              sx={styles.modalBoxBody.tags}
            >
              {tag}
            </Grid>
          ))}
        </Grid>
        <Grid item sx={styles.modalBoxBody.descriptionHeader}>
          <Typography variant="h5">DESCRIPTION</Typography>
        </Grid>
        <Grid item sx={styles.modalBoxBody.descriptionBody}>
          <Typography variant="body2">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
