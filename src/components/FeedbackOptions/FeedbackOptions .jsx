import css from './FeedbackOptions.module.css';
import propTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
  return (
    <div>
      <ul className={css.list}>
        {Object.keys(options).map((el, index) => {
          return (
            <li key={index}>
              <button
                className={css.btn}
                type="button"
                onClick={onLeaveFeedback}
                name={el}
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
