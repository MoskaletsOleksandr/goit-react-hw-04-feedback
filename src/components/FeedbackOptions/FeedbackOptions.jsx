import PropTypes from 'prop-types';
import { OptionList, OptionItem, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <OptionList>
        {options.map(option => {
          return (
            <OptionItem key={option}>
              <OptionButton
                name={option}
                type="button"
                onClick={onLeaveFeedback}
              >
                {option}
              </OptionButton>
            </OptionItem>
          );
        })}
      </OptionList>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
