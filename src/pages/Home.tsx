
import { useState } from 'react';
import Gad7Form from '../components/home/Gad7Form';
import HomeBody from '../components/HomeBody';
import Navbar from '../components/Navbar';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal ? <Gad7Form /> : null}
      <Navbar />
      <HomeBody />
    </div>
  );
};

export default Home;
