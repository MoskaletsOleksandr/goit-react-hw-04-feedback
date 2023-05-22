import { useState } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/common/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (feedback.good / countTotalFeedback()) * 100;
    return isNaN(percentage) ? 0 : Math.round(percentage);
  };

  const arrayOfStatsKeys = Object.keys(feedback);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={arrayOfStatsKeys}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section
        title="Statistics"
        positivePercentage={countPositiveFeedbackPercentage()}
        total={countTotalFeedback()}
      >
        <Statistics
          statistics={feedback}
          arrayOfStatsKeys={arrayOfStatsKeys}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};
