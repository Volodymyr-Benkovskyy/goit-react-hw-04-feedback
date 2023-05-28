import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';


export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0, 
    bad: 0
  });

  const onLeaveFeedback = val => {
    setCount(prevState => ({ ...prevState, [val]: prevState[val] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(count).reduce((acc, v) => acc + v, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (count.good === 0) return 0;
    return Math.round((count.good /countTotalFeedback()) * 100);
  }

  
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>
        {countTotalFeedback () > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={count.good}
              neutral={count.neutral}
              bad={count.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }

