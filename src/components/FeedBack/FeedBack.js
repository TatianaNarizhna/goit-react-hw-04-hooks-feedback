import  { useState } from 'react';
import FeedBackOptions from '../FeedBackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import s from './FeedBack.module.css';

import { FEEDBACK_OPTIONS } from '../Options/Options';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const changeFeedback = e => {
    const { feedback } = e.target.dataset;

    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
        // const arrayFeedBack = Object.values(this.state);
        // const ttl = arrayFeedBack.reduce((acc, sum) => acc + sum, 0);
        return good + neutral + bad;
      };


  const countPositiveFeedbackPercentage = () => {
            const total = countTotalFeedback();
        
            if (good === 0) {
              return 0;
            }
            return Math.round((good / total) * 100);
          };

  return (
    <div className={s.mainContainer}>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={FEEDBACK_OPTIONS}
          onGiveFeedback={changeFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

