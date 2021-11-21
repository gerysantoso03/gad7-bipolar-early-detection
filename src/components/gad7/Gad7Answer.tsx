import { Dispatch, SetStateAction } from 'react';
import { asnwerWeight } from '../../types';

type gad7Answer = {
  question: string;
  answer: string;
  weight: asnwerWeight;
  setState: Dispatch<SetStateAction<asnwerWeight>>;
};

const Gad7Answer = ({ question, answer, weight, setState }: gad7Answer) => {
  return (
    <label className="custom-radio" onClick={() => setState(weight)}>
      <input type="radio" name={question} />
      <span className="radio-btn">
        <i className="fas fa-check"></i>
        <div className="answer-icon">
          {weight === 0 ? (
            <i className="far fa-smile"></i>
          ) : weight === 1 ? (
            <i className="far fa-meh"></i>
          ) : weight === 2 ? (
            <i className="far fa-frown"></i>
          ) : (
            <i className="far fa-sad-tear"></i>
          )}
          <h3 className="text-indigo-700 text-sm font-semibold uppercase">
            {answer}
          </h3>
        </div>
      </span>
    </label>
  );
};

export default Gad7Answer;
