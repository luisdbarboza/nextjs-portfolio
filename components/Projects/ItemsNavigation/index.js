import { Box, Typography, Grid, useTheme } from '@material-ui/core';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import useCarrousel from '../../../hooks/useCarrousel';
import applyStyles from './styles';

const ItemsNavigation = ({ setModalData, projectsData, item, footer }) => {
  const theme = useTheme();
  const handleItemNavigation = (direction) => {
    if (direction === 'NEXT' && item + 1 <= projectsData.length - 1) {
      setModalData((prevModalData) => ({
        ...prevModalData,
        item: item + 1
      }));
    } else if (direction === 'PREVIOUS' && item - 1 >= 0) {
      setModalData((prevModalData) => ({
        ...prevModalData,
        item: item - 1
      }));
    }
  };

  return (
    <Grid
      container
      sx={{
        display: !footer ? 'flex' : 'none',
        '@media (max-width: 600px)': {
          display: footer ? 'flex' : 'none'
        }
      }}
    >
      <Grid
        item
        container
        xs={6}
        sx={
          applyStyles(theme, item, 'PREV', projectsData.length - 1)
            .navigationButton
        }
        onClick={() => handleItemNavigation('PREVIOUS')}
      >
        <Grid item container xs={4} alignItems="center" justifyContent="center">
          <FaLongArrowAltLeft color="white" />
        </Grid>
        <Grid item container xs={8} alignItems="center" justifyContent="center">
          <Typography
            sx={
              applyStyles(theme, item, 'PREV', projectsData.length - 1)
                .navigationButtonText
            }
          >
            ANTERIOR
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={6}
        sx={
          applyStyles(theme, item, 'NEXT', projectsData.length - 1)
            .navigationButton
        }
        onClick={() => handleItemNavigation('NEXT')}
      >
        <Grid item container alignItems="center" justifyContent="center" xs={8}>
          <Typography
            sx={
              applyStyles(theme, item, 'NEXT', projectsData.length - 1)
                .navigationButtonText
            }
          >
            SIGUIENTE
          </Typography>
        </Grid>
        <Grid item container alignItems="center" justifyContent="center" xs={4}>
          <FaLongArrowAltRight color="white" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemsNavigation;
