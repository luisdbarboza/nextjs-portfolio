const applyStyles = (theme) => ({
  modalBoxBody: {
    width: '100%',
    overflowY: 'scroll',
    height: '80vh',

    currentImageGridWrapper: {
      padding: '0.5rem',
      width: '100%',
      // border: '1px solid black',
      height: '80%',
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        height: '400px',
      },
    },
    currentImageWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        width: '100%',
        height: '80%',
      },
    },
    carrouselInputPanel: {
      // bgcolor: 'red',
      height: '20%',
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        height: '100px',
      },
      imageBox: {
        position: 'relative',
        height: '70px',
        flex: 1,
        // border: '2px solid green',
        margin: '0.5rem',
      },
      arrows: {
        fontSize: '2rem',
        ':hover': {
          cursor: 'pointer',
        },
      },
    },
    tagsWrapper: {
      flex: 1,
      justifyContent: 'center',
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        marginTop: '1rem',
      },
    },
    tags: {
      bgcolor: '#16a085',
      color: 'white',
      borderRadius: '25px',
      padding: '0.5rem',
      margin: '0.2rem 0.5rem',
      fontSize: '0.8rem',
    },
    descriptionHeader: {
      flex: 0.5,
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        marginTop: '1rem',
      },
    },
    descriptionBody: {
      flex: 4,
    },
  },
});

export default applyStyles;
