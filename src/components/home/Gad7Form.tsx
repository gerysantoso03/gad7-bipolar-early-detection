import { useState } from 'react';
import Gad7Question from './Gad7Question';

const Gad7Form = () => {
  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);
  const [question5, setQuestion5] = useState(0);
  const [question6, setQuestion6] = useState(0);
  const [question7, setQuestion7] = useState(0);
  return (
    <div className="border border-black">
      <h1 className="text-center text-2xl text-blue-300">
        Generalised Anxiety Disorder - GAD7{' '}
      </h1>
      <h4 className="text-md text-center text-gray-500">
        Over the last 2 weeks, how often you been bothered by any of the
        following problems?
      </h4>

      <div className="gad7-form p-4">
        <Gad7Question
          setState={setQuestion1}
          question="Feeling nervous, anxious or on edge?"
        />

        <Gad7Question
          setState={setQuestion2}
          question="Not being able to stop or control worrying?"
        />
        <Gad7Question
          setState={setQuestion3}
          question="Worrying too much about different things?"
        />
        <Gad7Question setState={setQuestion4} question="Trouble relaxing?" />
        <Gad7Question
          setState={setQuestion5}
          question="Being so restless that it is hard to sit still?"
        />
        <Gad7Question
          setState={setQuestion6}
          question="Becoming easily annoyed or irritable?"
        />
        <Gad7Question
          setState={setQuestion7}
          question="Feeling afraid as if something awful might happen?"
        />
      </div>
    </div>
  );
};

export default Gad7Form;
