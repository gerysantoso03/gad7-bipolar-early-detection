import { Dispatch, SetStateAction, useState } from 'react';

type toast = {
  setToast: Dispatch<SetStateAction<boolean>>;
};

const Toast = ({ setToast }: toast) => {
  const [position, setPosition] = useState('toast-right');

  return (
    <div className={`toast-container ${position}`}>
      <div className="toast bg-red-500 realtive flex w-72 h-24 rounded-md">
        <button
          onClick={() => {
            setPosition('dismiss');
            setToast(false);
          }}
          className="absolute top-1 right-2 text-md font-semibold text-white"
        >
          X
        </button>
        <div className="toast-logo w-1/5 flex justify-center items-center">
          <i className="fas fa-exclamation-triangle text-2xl text-white"></i>
        </div>
        <div className="px-2 w-full flex flex-col justify-center items-start">
          <p className="text-lg text-white font-bold">Warning</p>
          <p className="text-md text-white font-semibold">
            All Question Must Be Filled !!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
