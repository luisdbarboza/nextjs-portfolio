const applyStyles = (theme) => ({
  wrapper: {
    width: '100%',
    bgcolor: '#223f4d',
    height: 'calc(100vh - 50px)',
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      display: 'none',
    },
  },
  wrapperFlexbox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '2rem',
    justifyContent: 'space-between',
  },
  headingWrapper: { padding: '1rem', width: '100%' },
  heading: {
    color: 'white',
    textAlign: 'justify',
    fontFamily: 'Fira Sans',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    [`@media (max-height: 460px)`]: {
      fontSize: '1rem',
    },
  },
  footer: {
    color: 'skyblue',
    textAlign: 'justify',
    [`@media (max-height: 460px)`]: {
      fontSize: '0.8rem',
    },
  },
});

export default applyStyles;
