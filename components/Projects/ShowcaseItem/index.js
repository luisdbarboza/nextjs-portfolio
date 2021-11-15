import { Paper, Box, useTheme } from '@material-ui/core';
import applyStyles from './style';

export default function ShowcaseItem({
  name,
  year,
  tags,
  images,
  description,
  repositories,
  liveURL
}) {
  const theme = useTheme();
  const styles = applyStyles(theme, images);

  return (
    <Paper elevation={3} sx={styles.itemCard}>
      <Box sx={styles.titleBox}>{name}</Box>
    </Paper>
  );
}
