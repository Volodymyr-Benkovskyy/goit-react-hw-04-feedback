import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const options = ['good', 'neutral', 'bad'];
export const FeedbackOptions = ({onLeaveFeedback}) => {
  
  return (
    <div className={s.feedbackBox}>
      {options.map(value => (
        <button
          className={s.feedbackButton}
          key={value}
          type="button"
          onClick={() => onLeaveFeedback(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};