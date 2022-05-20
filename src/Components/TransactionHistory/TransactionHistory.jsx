import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

function TransactionHistory({items}) {
  return (
    <table className={s.transaction}>
      <thead className={s.text}>
        <tr>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.title}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired)
  ),
};
