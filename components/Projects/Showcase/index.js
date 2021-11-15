import { useState } from 'react';
import { Grid } from '@material-ui/core';
import ShowcaseItem from '../ShowcaseItem';
import ShowcaseItemModal from '../ShowcaseItemModal';
import projectsData from '../../../data/projects';

export default function Showcase() {
  const [modalData, setModalData] = useState({
    open: false,
    item: null
  });
  const handleClose = () => setModalData(() => ({ ...modalData, open: false }));

  const handleModalOpening = (projectIndex) => {
    setModalData((prevModalData) => ({
      open: !modalData.open,
      item: projectIndex
    }));
  };

  return (
    <>
      <Grid
        sx={{
          bgcolor: '#0A1929',
          width: '100%',
          padding: '2rem'
        }}
        container
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} sm={6} key={index + project.name}>
                <div
                  key={project.name}
                  onClick={() => handleModalOpening(index)}
                >
                  <ShowcaseItem
                    name={project.name}
                    year={project.year}
                    tags={project.tags}
                    images={project.images}
                    description={project.description}
                    repositories={project.repositories}
                    liveURL={project.liveURL}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {modalData.item !== null && (
        <ShowcaseItemModal
          open={modalData.open}
          handleClose={handleClose}
          item={modalData.item}
          projectsData={projectsData}
          setModalData={setModalData}
        />
      )}
    </>
  );
}
