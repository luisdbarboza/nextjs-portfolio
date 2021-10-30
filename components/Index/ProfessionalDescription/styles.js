const applyStyles = (theme) => ({
  wrapper: {
    width: '100%',
    bgcolor: '#223f4d',
    height: 'calc(100vh - 50px)',
    [`@media (max-width: ${theme.breakpoints.values.md})px`]: {
      height: '100px',
    },
  },
  gridColumn: { direction: 'column', sx: { height: '100%' } },
  headingWrapper: { padding: '1rem', width: '100%' },
  heading: {
    color: 'white',
    textAlign: 'justify',
    fontFamily: 'Fira Sans',
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  footer: { color: 'skyblue', textAlign: 'justify' },
});

export default applyStyles;
