const BipolarReason = () => {
  return (
    <section className="px-12 py-6">
      <h1 className="text-indigo-900 uppercase font-bold text-3xl">
        Kok Bisa Sih Orang Terkena Gangguan Bipolar? Emang Penyebabnya Apa?{' '}
      </h1>
      <div className="flex gap-10 py-4">
        <div>
          <p className="text-lg text-indigo-900 text-justify leading-8 font-semibold">
            Penyebab pastinya sampai saat ini belum diketahui, tapi ada dugaan
            yang mengatakan bahwa kondisi ini merupakan dampak dari adanya
            ketidakseimbangan pada zat pengontrol fungsi otak yang disebut
            “Neurotransmitter”.
          </p>
          <p className="text-lg text-indigo-900 text-justify leading-8 font-semibold">
            Faktor penyebab terjadinya ketidakseimbangan pada zat pengontrol
            fungsi otak itu ada banyak, berikut ini akan kita jabarin
            faktor-faktor yang mempengaruhi hal tersebut: Genetik, Traumatik,
            Lingkungan & Sosial .
          </p>
        </div>
        <ol type="1">
          <li className="bg-indigo-200  text-indigo-800 rounded-md p-2 mb-2 font-medium">
            Genetik: Salah satu anggota keluarga mengidap gangguan bipolar,
            sehingga memiliki kemungkinan menurun ke anggota keluarga lainnya
            juga.
          </li>
          <li className="bg-indigo-200  text-indigo-800 rounded-md p-2 mb-2 font-medium">
            Traumatik: Kejadian yang menimpa korban di masa lampau dapat membuat
            orang mengalami depresi dan terkena gangguan bipolar.
          </li>
          <li className="bg-indigo-200  text-indigo-800 rounded-md p-2 font-medium">
            Lingkungan & Sosial: Lingkungan yang buruk dapat mempengaruhi mental
            seseorang, contohnya mendapatkan kekerasan dari orang lain yang
            membuat korban menjadi trauma, perceraian orang tua yang membuat
            korban menjadi depresi, dll.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BipolarReason;
