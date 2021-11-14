import { useState } from 'react';
import Gad7Form from '../components/home/Gad7Form';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal ? <Gad7Form /> : null}
    </div>
  );
};

export default Home;
