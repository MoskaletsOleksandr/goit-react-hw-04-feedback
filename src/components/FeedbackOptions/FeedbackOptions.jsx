import PropTypes from 'prop-types';
import { Component } from 'react';
import { OptionList, OptionItem, OptionButton } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <OptionList>
          {this.props.options.map(stat => {
            return (
              <OptionItem key={stat}>
                <OptionButton
                  name={stat}
                  type="button"
                  onClick={this.props.onLeaveFeedback}
                >
                  {stat}
                </OptionButton>
              </OptionItem>
            );
          })}
        </OptionList>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
