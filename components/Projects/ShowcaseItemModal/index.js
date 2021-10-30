import { Modal, Box, Grid, useTheme } from '@material-ui/core';
import ShowcaseItemHeader from '../ShowcaseItemModalHeader';
import ShowcaseItemModalBody from '../ShowcaseItemModalBody';
import applyStyles from './styles';

const ShowcaseItemModal = ({
  open,
  handleClose,
  item,
  projectsData,
  setModalData,
}) => {
  const theme = useTheme();
  const styles = applyStyles(theme);
  const itemData = projectsData[item];
  const { name, year, tags, images, description, repositories, liveURL } =
    itemData;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalBox}>
        <Grid container sx={styles.modalBoxGridWrapper}>
          <ShowcaseItemHeader
            name={name}
            repositories={repositories}
            liveURL={liveURL}
            setModalData={setModalData}
            projectsData={projectsData}
            item={item}
            handleClose={handleClose}
          />
          <Grid item xs={12}>
            <ShowcaseItemModalBody
              images={images}
              description={description}
              year={year}
              tags={tags}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={styles.modalBoxFooter} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ShowcaseItemModal;
