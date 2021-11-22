import { Dispatch, SetStateAction } from 'react';
import { asnwerWeight } from '../../types';
import Gad7Answer from './Gad7Answer';

type gad7Question = {
  question: string;
  setState: Dispatch<SetStateAction<asnwerWeight>>;
};

const Gad7Question = ({ question, setState }: gad7Question) => {
  return (
    <div className="gad7-question">
      <h4 className="text-indigo-100 font-medium text-lg">{question}</h4>
      <div className="radio-buttons">
        <Gad7Answer
          question={question}
          setState={setState}
          answer="Not at all"
          weight={0}
        />
        <Gad7Answer
          question={question}
          setState={setState}
          answer="Several days"
          weight={1}
        />
        <Gad7Answer
          question={question}
          setState={setState}
          answer="More than half the days"
          weight={2}
        />
        <Gad7Answer
          question={question}
          setState={setState}
          answer="Nearly every day"
          weight={3}
        />
      </div>
    </div>
  );
};

export default Gad7Question;
