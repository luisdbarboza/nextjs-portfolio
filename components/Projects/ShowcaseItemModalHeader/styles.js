const applyStyles = (theme) => ({
  modalBoxHeader: {
    wrapperBox: {
      width: '100%',
      height: '70px',
      bgcolor: '#0A1929',
      textTransform: 'uppercase',
      padding: '0.5rem 0',
      paddingLeft: '1rem',
    },
    title: {
      color: 'white',
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '1.5rem',
      [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
        fontSize: '1.2rem',
      },
    },
    linksBox: {
      color: 'white',
      paddingLeft: '0.5rem',
      fontSize: '1.2rem',
    },
    link: {
      padding: '0rem 0.5rem',
    },
    closeButtonWrapper: {
      color: 'white',
      [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
        fontSize: '1.5rem',
      },
    },
  },
});

export default applyStyles;
