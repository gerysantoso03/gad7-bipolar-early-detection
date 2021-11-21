import { useContext, useState } from 'react';
import { Gad7Context } from '../../context/Gad7Context';
import { asnwerWeight } from '../../types';
import Toast from '../global/Toast';
import Gad7Question from './Gad7Question';
import Result from './Result';
import { result } from '../../types';

const Gad7Form = () => {
  const gad7context = useContext(Gad7Context);
  const [isResult, setIsResult] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const [result, setResult] = useState<result>({
    title: '',
    desc: '',
    treatment: '',
  });

  const [question1, setQuestion1] = useState(null as asnwerWeight);
  const [question2, setQuestion2] = useState(null as asnwerWeight);
  const [question3, setQuestion3] = useState(null as asnwerWeight);
  const [question4, setQuestion4] = useState(null as asnwerWeight);
  const [question5, setQuestion5] = useState(null as asnwerWeight);
  const [question6, setQuestion6] = useState(null as asnwerWeight);
  const [question7, setQuestion7] = useState(null as asnwerWeight);

  const calculateResult = () => {
    if (
      question1 === null ||
      question2 === null ||
      question3 === null ||
      question4 === null ||
      question5 === null ||
      question6 === null ||
      question7 === null
    ) {
      setIsToast(true);
    } else {
      const weight =
        question1 +
        question2 +
        question3 +
        question4 +
        question5 +
        question6 +
        question7;
      if (weight >= 15 && weight <= 21) {
        setResult(gad7context.severe);
      }
      if (weight >= 10 && weight <= 14) {
        setResult(gad7context.moderate);
      }
      if (weight <= 9) {
        setResult(gad7context.mild);
      }

      setIsResult(true);
    }
  };
  return (
    <div className="gad7-modal relative p-4 bg-white">
      <h1 className="text-center text-2xl font-semibold text-blue-200 mb-2">
        Generalised Anxiety Disorder - GAD7{' '}
      </h1>
      <h4 className="text-white text-lg text-center ">
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
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            calculateResult();
          }}
          className="rounded-full py-3 px-6 bg-white text-indigo-700 text-md uppercase hover:border-indigo-300 border-2 border-indigo-700 font-semibold"
        >
          Submit Test
        </button>
      </div>
      {isResult ? <Result setResult={setIsResult} result={result} /> : null}
      {isToast ? <Toast setToast={setIsToast} /> : null}
    </div>
  );
};

export default Gad7Form;
