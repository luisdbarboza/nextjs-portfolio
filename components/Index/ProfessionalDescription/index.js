import { Box, Typography, Grid, useTheme } from '@material-ui/core';
import applyStyles from './styles';

export default function ProfessionalDescription() {
  const theme = useTheme();
  const styles = applyStyles(theme);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperFlexbox}>
        <Typography sx={styles.heading}>
          Fullstack software developer, flexible minded, Javascript/typescript/python skills
        </Typography>
        <Typography variant="body" sx={styles.footer}>
          <i>
            i'm not married to any stack of technologies, i have javascript/typescript/python skills, and i'll learn new skills as the project demands it, i'm currently learning c++ because i'm also interested in game development and low level concepts, but i'm still a newbie with c++
          </i>
        </Typography>
      </Box>
    </Box>
  );
}
