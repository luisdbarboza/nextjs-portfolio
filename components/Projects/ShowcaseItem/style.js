const applyStyles = (theme, images) => ({
  itemCard: {
    position: 'relative',
    height: '250px',
    backgroundImage: `url("${images[0]}")`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  titleBox: {
    position: 'absolute',
    left: '5px',
    right: '5px',
    bottom: '5px',
    padding: '15px',
    bgcolor: 'rgba(30,39,46, .55)',
    borderRadius: '3px',
    color: 'white',
    fontFamily: 'Fira Sans',
    fontSize: '1.5rem',
    transition: '0.5s ease backdrop-filter',
    ':hover': {
      transition: '0.5s ease background-color',
      '-webkit-backdrop-filter': 'blur(5px)',
      'backdrop-filter': 'blur(3px)',
      cursor: 'pointer',
      bgcolor: 'rgba(30,39,46, .55)',
    },
  },
});

export default applyStyles;
