import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-teal-500 p-6 sm:p-4">
      <div className="flex items-center flex-shrink-0 text-black mr-6 grip gap-4">
        <div className="w-10">
          <img src={Logo} alt="Cendol Goyang" />
        </div>
        <span className="text-indigo-900 font-semibold text-2xl sm:hidden">
          Cendol Bergoyang
        </span>
      </div>
      <Link
        to="/gad7"
        className="flex flex-row text-indigo-900 hover:text-indigo-700 font-semibold gap-x-16 text-2xl"
      >
        <h3>Bipolar Early Detection</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
