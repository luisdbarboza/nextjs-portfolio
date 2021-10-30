const styles = {
  exteriorWrapper: {
    height: '600px',
    width: '100%',
    '@media (max-width: 600px)': {
      height: '750px',
    },
  },
  descriptionWrapper: {
    height: '100%',
    margin: '0 auto',
    maxWidth: '500px',
    padding: '2rem',
  },
  iconsBoxWrapper: {
    height: '100%',
    padding: '2rem',
    bgcolor: 'white',
    fontSize: '2rem',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
};

export default styles;
