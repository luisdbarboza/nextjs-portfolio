import Link from "next/link";
import { Box, Stack, Typography, useTheme } from "@material-ui/core";
import links from "./linksData";
import applyStyles from "./styles";

export default function NavigationBar() {
  const theme = useTheme();
  return (
    <nav>
      <Box sx={applyStyles(theme).nav}>
        <Stack {...applyStyles(theme).navStack}>
          <Link href="/">
            <Box sx={applyStyles(theme).linkLogo}>
              <a>
                <Typography variant="h1" sx={applyStyles(theme).logo}>
                  Luis Barboza
                </Typography>
              </a>
            </Box>
          </Link>
          <Stack {...applyStyles(theme).linksStack}>{links}</Stack>
        </Stack>
      </Box>
    </nav>
  );
}
