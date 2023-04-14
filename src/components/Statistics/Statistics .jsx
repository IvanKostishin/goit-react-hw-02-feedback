import css from './Statistics.module.css';
import propTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>
          Positive feedback:
          {positivePercentage()}%
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.func.isRequired,
  positivePercentage: propTypes.func.isRequired,
};
