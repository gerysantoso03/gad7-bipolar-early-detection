import Hero from '../components/home/Hero';
import Navbar from '../components/global/Navbar';
import BipolarMean from '../components/home/BipolarMean';
import BipolarReason from '../components/home/BipolarReason';
import BipolarSymptom from '../components/home/BipolarSymptom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BipolarMean />
      <BipolarReason />
      <BipolarSymptom />
    </div>
  );
};

export default Home;
