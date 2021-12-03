import { createContext } from 'react';
import { Props, result } from '../types';

const normal: result = {
  title: 'Normal Anxiety',
  desc: 'Normal Anxiety merupakan keadaan dimana seseorang tidak memiliki gejala kecemasan',
  treatment:
    'Hasil diatas merupakan hasil dari sistem yang dimana sistem hanya melakukan analisa berdasarkan gejala gejala umum yang biasa dialami. Untuk melakukan check up lebih lanjut terhadap gangguan tersebut, harap hubungi dokter atau ahli psikologi.',
};

const mild: result = {
  title: 'Mild Anxiety',
  desc: 'Mild Anxiety adalah tingkat episode dari depresi ringan. Tingkat tersebut melibatkan lebih dari sekedar perasaan sedih sementara. Biasanya orang yang terkena gangguan tersebut tidak menyadarinya. Dampak dari mild anxiety antara lain, cepat marah, merasa putus asa, membenci diri sendiri, kehilangan minat pada aktivitas yang sedang dijalani, kesulitas berkonsentrasi, kurang motivasi, tidak tertarik sosialiasi, perubahan nafsu makan.',
  treatment:
    'Hasil diatas merupakan hasil dari sistem yang dimana sistem hanya melakukan analisa berdasarkan gejala gejala umum yang biasa dialami. Untuk melakukan check up lebih lanjut terhadap gangguan tersebut, harap hubungi dokter atau ahli psikologi.',
};

const moderate: result = {
  title: 'Moderate Anxiety',
  desc: 'Orang dengan tingkat kecemasan moderate memiliki gejala yang lebih sering atau persisten ketimbang mereka yang mengalami kecemasan mild, tetapi masih lebih baik dari seseorang dengan kecemasan severe. Misalnya, orang dengan kecemasan moderate dapat melaporkan kalau mereka mengalami gejala seperti merasa gelisah, tidak dapat mengendalikan kekhawatiran mereka atau tidak dapat bersantai beberapa hari atau sebagian besar hari dalam seminggu, tetapi tidak setiap hari. Meskipun gejala kecemasan moderate mengganggu, orang dengan kecemasan moderate mungkin berhasil mengelola kecemasan mereka dengan bantuan dokter atau self-help',
  treatment:
    'Hasil diatas merupakan hasil dari sistem yang dimana sistem hanya melakukan analisa berdasarkan gejala gejala umum yang biasa dialami. Untuk melakukan check up lebih lanjut terhadap gangguan tersebut, harap hubungi dokter atau ahli psikologi.',
};

const severe: result = {
  title: 'Severe Anxiety',
  desc: 'Gejala kecemasan severe sering terjadi dan terus-menerus dan dapat terjadi peningkatan denyut jantung, perasaan panik dan rasa enggan bersosialisasi. Gejala-gejala ini dapat mengakibatkan hilangnya pekerjaan dan peningkatan biaya perawatan kesehatan. Selain itu, individu dengan kecemasan severe dapat beralih ke alkohol dan obat-obatan terlarang sebagai sarana untuk mengatasi gejala mereka.',
  treatment:
    'Hasil diatas merupakan hasil dari sistem yang dimana sistem hanya melakukan analisa berdasarkan gejala gejala umum yang biasa dialami. Untuk melakukan check up lebih lanjut terhadap gangguan tersebut, harap hubungi dokter atau ahli psikologi.',
};

export const Gad7Context = createContext({ normal, mild, moderate, severe });

const Gad7Provider = ({ children }: Props) => {
  return (
    <Gad7Context.Provider value={{ normal, mild, moderate, severe }}>
      {children}
    </Gad7Context.Provider>
  );
};

export default Gad7Provider;
