import Link from 'next/link';
import { Typography } from '@material-ui/core';

const linksData = [
  { text: 'Sobre mí', url: '/' },
  { text: 'Proyectos', url: '/projects' },
];

const links = linksData.map((link, index) => (
  <Link href={link.url} key={index}>
    <a>
      <Typography
        variant="h6"
        sx={{
          color: 'white',
          fontFamily: 'Fira Code',
          '@media (max-width: 600px)': {
            fontSize: '1rem',
          },
        }}
      >
        {link.text}
      </Typography>
    </a>
  </Link>
));

export default links;
