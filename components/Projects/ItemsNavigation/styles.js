const applyStyles = (theme, index, direction, length) => ({
  navigationButton: {
    ':hover': {
      textDecoration: 'underline',
      textDecorationColor:
        (index === 0 && direction === 'PREV') ||
        (index === length && direction === 'NEXT')
          ? 'gray'
          : 'white',
      cursor:
        (index === 0 && direction === 'PREV') ||
        (index === length && direction === 'NEXT')
          ? 'initial'
          : 'pointer',
    },
  },
  navigationButtonText: {
    fontSize: '1.3rem',
    color:
      (index !== 0 && direction === 'PREV') ||
      (index !== length && direction === 'NEXT')
        ? 'white'
        : 'gray',
    '@media (max-width: 1200px)': {
      fontSize: '1rem',
    },
  },
});

export default applyStyles;
