import Link from 'next/link';
import { Typography } from '@material-ui/core';

const linksData = [
  { text: 'Sobre mí', url: '/' },
  { text: 'Proyectos', url: '/projects' },
];

const styles = {
  color: 'white',
  fontFamily: 'Fira Code',
  '@media (max-width: 900px)': {
    fontSize: '2.5rem',
  },
  ':hover': {
    textDecoration: 'underline',
  },
};

const links = linksData.map((link, index) => (
  <Link href={link.url} key={index}>
    <a>
      <Typography variant="h6" sx={styles}>
        {link.text}
      </Typography>
    </a>
  </Link>
));

export default links;
