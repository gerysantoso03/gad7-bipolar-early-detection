import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { result } from '../../types';

type resultType = {
  result: result;
  setResult: Dispatch<SetStateAction<boolean>>;
};

const Result = ({ result, setResult }: resultType) => {
  const [show, setShow] = useState('result-show');
  return (
    <div className="result-modal fixed top-0 right-0 w-full h-full flex justify-center items-center">
      <div
        className={`result-content ${show} p-4 relative flex flex-col justify-around items-center border w-3/5 h-3/5 bg-purple-100 rounded-md sm:w-4/5`}
      >
        <Link to="/">
          <button className="text-xs sm:text-md absolute top-3 left-2 hover:text-indigo-700 font-semibold text-indigo-500">
            Back Home
          </button>
        </Link>
        <button
          onClick={() => {
            setResult(false);
            setShow('result-dismiss');
          }}
          className="absolute top-1 right-2 text-indigo-500 hover:text-indigo-700 text-md sm:text-lg font-bold"
        >
          X
        </button>
        <h1 className="text-2xl font-bold text-indigo-800">{result.title}</h1>
        <p className="text-md font-semibold text-indigo-700 text-justify leading-7 sm:leading-7 sm:text-sm">
          {result.desc}
        </p>
        <p className="text-xs text-justify text-indigo-700">
          {result.treatment}
        </p>
      </div>
    </div>
  );
};

export default Result;
