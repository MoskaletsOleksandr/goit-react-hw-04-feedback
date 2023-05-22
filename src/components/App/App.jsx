import { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/common/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    this.setState({
      [event.target.name]: this.state[event.target.name] + 1,
    });
  };

  arrayOfStatsKeys = Object.keys(this.state);

  countTotalFeedback() {
    const values = Object.values(this.state);
    let total = 0;

    for (const value of values) {
      total += value;
    }

    return total;
  }

  countPositiveFeedbackPercentage() {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    if (isNaN(percentage)) {
      return 0;
    }
    return Math.round(percentage);
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.arrayOfStatsKeys}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section
          title="Statistics"
          positivePercentage={this.countPositiveFeedbackPercentage()}
          total={this.countTotalFeedback()}
        >
          <Statistics
            state={this.state}
            arrayOfStatsKeys={this.arrayOfStatsKeys}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}
