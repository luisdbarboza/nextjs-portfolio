const applyStyles = (theme) => ({
  profilePhotoWrapper: {
    display: "flex",
    width: "100%",
    padding: '1rem',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    wrapper: {
      width: 270,
      height: 270,
      border: "8px solid #3C4B5B",
      "@media (max-width: 600px)": {
        width: 150,
        height: 150,
      },
    },
    text: {
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    socialMediaIconWrapper: { padding: "1rem" },
    socialMediaIcon: { color: "white", fontSize: "2rem" },
  },
  skillsAndInterestsBoxWrapper: { width: "100%", height: '100%' },
  skillsAndInterestsBox: {
    borderBottom: "1px dotted white",
  padding: "0.5rem",
    text: {
      header: { fontWeight: "bold" },
      body: { fontWeight: "light" },
      presentationHeader: {
        fontWeight: "bold",
        fontSize: "2rem",
        "@media (max-width: 1100px)": {
          fontSize: "1.5rem",
        },
      },
    },
  },
});

export default applyStyles;
