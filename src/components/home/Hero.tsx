import Mata from '../../assets/Mata.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="p-3 h-full relative">
      <div className="flex sm:flex-col-reverse">
        <div className="flex flex-1 flex-col gap-5 items-center justify-around sm:gap-8">
          <div className="">
            <h1 className="hero-title text-5xl  font-semibold text-indigo-900 text-center sm:hidden">
              Make Your Mental Health A Priority
            </h1>
          </div>
          <div className="w-full">
            <p className="hero-motivation text-3xl font-bold text-indigo-800 leading-9 text-center">
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
          <div className="eye-logo w-3/5 sm:w-4/5">
            <img src={Mata} alt="Eye Logo" />
          </div>
        </div>
      </div>
      <div className="py-8 px-4">
        <p className="text-right text-indigo-900 font-semibold text-xl sm:text-center">
          {' '}
          <i className="fas fa-star-of-life text-yellow-400"></i> Talk to people
          you trust can help
        </p>
      </div>
    </section>
  );
};

export default Hero;
