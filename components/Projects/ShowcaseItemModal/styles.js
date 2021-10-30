const applyStyles = (theme) => ({
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: '70%', xs: '90%' },
    bgcolor: 'white',
    boxShadow: 24,
    outline: 'none',
    textTransform: 'uppercase',
  },
  modalBoxGridWrapper: { width: '100%', height: '100%', position: 'relative' },
  modalBoxFooter: {
    width: '100%',
    height: '40px',
    bgcolor: '#0A1929',
    textTransform: 'uppercase',
  },
  bordersForDemo: { border: '1px solid white' },
});

export default applyStyles;
