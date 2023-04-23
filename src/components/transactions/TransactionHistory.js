import styles from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.headTr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.bodyTr} key={id}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}</td>
            <td className={styles.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
