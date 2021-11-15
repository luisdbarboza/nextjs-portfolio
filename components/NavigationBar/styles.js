const applyStyles = (theme) => {
  return {
    nav: {
      bgcolor: theme.palette.primary.main,
      width: '100%',
      height: '50px',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 999,
      boxShadow: '1px 1px 3px black',
    },
    navStack: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      direction: 'row',
    },
    logo: {
      color: 'skyblue',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      ':hover': {
        cursor: 'pointer',
      },
    },
    linksStack: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 2,
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        display: 'none',
      },
    },
    menuButton: {
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      ':hover': { cursor: 'pointer' },
      color: 'white',
      display: 'none',
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        display: 'block',
      },
    },
    linksModalBox: {
      position: 'fixed',
      width: '100%',
      height: '100vh',
      top: 50,
      left: 0,
      zIndex: 800,
      backgroundColor: '#0A1929',
      display: 'none',
    },
  };
};

export default applyStyles;
