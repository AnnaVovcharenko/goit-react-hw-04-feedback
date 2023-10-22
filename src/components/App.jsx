import React, {  useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistic.jsx';
import Notification from './Notification/Notifications.jsx';
import { AppSection } from './App.styled.js';

//export class App extends Component
export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  //використовуєм хук useState
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // btnFeedBack = button =>
  //   this.setState(prevState => {
  //     return { [button]: prevState[button] + 1 };
  //   });

  const btnFeedBack = button => {
    switch (button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const totalFeedback = this.countTotalFeedback();
  //   return totalFeedback !== 0
  //     ? Math.ceil((good / totalFeedback) * 100) + '%'
  //     : 0;
  // };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.ceil((good / totalFeedback) * 100); 
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();

  return (
    <AppSection>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} btnFeedBack={btnFeedBack} />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            persentage={totalPercentage}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback." />
        </Section>
      )}
    </AppSection>
  );
};
