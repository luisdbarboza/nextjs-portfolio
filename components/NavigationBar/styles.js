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
      justifyContent: 'flex-start',
      alignItems: 'center',
      direction: 'row',
      spacing: 4,
    },
    logo: {
      color: 'skyblue',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      ':hover': {
        cursor: 'pointer'
      }
    },
    linksStack: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      direction: 'row',
      spacing: 2,
    },
  };
};

export default applyStyles;
