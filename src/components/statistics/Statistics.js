import styles from './Statistics.module.css';
const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.container}>
      {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
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
