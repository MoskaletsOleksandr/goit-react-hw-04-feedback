import { useState  } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/common/Section';

export const App = () => {

  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const { name } = event.target;

    if (name === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (name === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;
    return isNaN(percentage) ? 0 : Math.round(percentage);
  };

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick}
          ></FeedbackOptions>
        </Section>
        <Section
          title="Statistics"
          positivePercentage={countPositiveFeedbackPercentage()}
          total={countTotalFeedback()}
        >
          <Statistics
            good={good}
          neutral={neutral}
          bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Container>
    );
}
