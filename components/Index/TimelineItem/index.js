import classnames from 'classnames';
import Image from 'next/image';
import styles from './styles.module.css';

export default function TimelineItem({
  year,
  heading,
  subheading,
  description,
  image,
  direction,
}) {
  return (
    <div
      className={classnames({
        [styles.container]: true,
        [styles.left]: direction === 'left',
        [styles.right]: direction !== 'left',
      })}
    >
      <div className={styles.content}>
        <h2>{year}</h2>
        {heading && <h3>{heading}</h3>}
        {subheading && <h4 style={{ color: 'purple' }}>{subheading}</h4>}
        {image && (
          <Image
            src={image}
            alt={year}
            height="170px"
            width="400px"
            layout="responsive"
          />
        )}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
