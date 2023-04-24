import styles from './Statistics.module.css';
import PropType from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propType = {
  title: PropType.string,
  stats: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      label: PropType.string.isRequired,
      percentage: PropType.number.isRequired,
    })
  ),
};
