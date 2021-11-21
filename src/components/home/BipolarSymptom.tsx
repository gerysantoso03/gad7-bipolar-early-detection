const BipolarSymptom = () => {
  return (
    <section className="px-12 py-6">
      <h1 className="text-indigo-900 uppercase font-bold text-3xl mb-4">
        Gejala Bipolar itu ada apa aja sih?
      </h1>
      <h3 className="text-justify text-lg text-indigo-800 font-semibold mb-2">
        Bipolar memiliki 2 fase emosi yaitu Mania (sangat senang) & Depresif
        (sangat terpuruk). Orang-orang yang mengalami Bipolar akan mengalami
        perubahan emosi dari Mania menjadi Depresif, atau pun sebaliknya.
      </h3>
      <div className="flex items-center gap-10">
        <div className="flex-1">
          <p className="text-md text-indigo-800 font-semibold mb-3">
            Berikut adalah gejala mania :{' '}
          </p>
          <ul className="flex flex-col gap-2">
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Merasa Sangat Bahagia atau Senang
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Merasa Sangat Bersemangat
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Muncul Rasa Percaya Diri yang Berlebihan
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Keinginan untuk Tidur Menurun
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Mudah Terganggu
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="text-md text-indigo-800 font-semibold mb-3">
            Berikut adalah gejala depresif :{' '}
          </p>
          <ul className="flex flex-col gap-2">
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              {' '}
              Merasa Sangat Sedih dan Putus Asa
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Lemas dan Tidak Bertenaga
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Sulit untuk Berkonsentrasi
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Merasa Kesepian dan Tidak Berguna
            </li>
            <li className="bg-indigo-200 p-2 rounded-md text-indigo-900 font-semibold">
              Merasa Bersalah
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BipolarSymptom;
