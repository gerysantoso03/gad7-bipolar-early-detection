import Mata from '../../assets/Mata.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-12 px-4 h-full relative">
      <div className="flex">
        <div className="flex flex-1 flex-col gap-5 items-center justify-around">
          <div className="">
            <h1 className="text-5xl uppercase font-semibold text-indigo-900 text-center">
              Make Your Mental Health A Priority
            </h1>
          </div>
          <div className="w-full">
            <p className="text-2xl font-semibold text-indigo-800 leading-9 text-center">
              “All you need is HOPE and STRENGTH, HOPE that it will get BETTER,
              and STRENGTH to hold on until it DOES”
            </p>
          </div>
          <Link to="/gad7">
            <button className="rounded-full font-semibold text-indigo-900 py-3 px-6 bg-white border-2 hover:border-indigo-700 hover:text-indigo-700">
              <p>Take The Test!</p>
            </button>
          </Link>
        </div>
        <div className="flex-1 flex item-center justify-center">
          <div className="eye-logo w-96">
            <img src={Mata} alt="Eye Logo" />
          </div>
        </div>
      </div>
      <div className="py-14 px-4">
        <p className="text-right text-indigo-900 font-semibold text-lg">
          {' '}
          <i className="fas fa-star-of-life text-yellow-400"></i> Talk to people
          you trust can help
        </p>
      </div>
    </section>
  );
};

export default Hero;
