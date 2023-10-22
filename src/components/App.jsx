import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistic.jsx';
import Notification from './Notification/Notifications.jsx';
import { AppSection } from './App.styled.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnFeedBack = button =>
    this.setState(prevState => {
      return { [button]: prevState[button] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback !== 0
      ? Math.ceil((good / totalFeedback) * 100) + '%'
      : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    
    return (
      <AppSection>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} btnFeedBack={this.btnFeedBack} />
        </Section>

        {totalFeedback >0 ? (
          <Section title="Statistic">
            <Statistics
              state={this.state}
              total={totalFeedback}
              persentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback." />
          </Section>
        )}
      </AppSection>
    );
  }
}
