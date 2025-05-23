import styles from '../styles/Poem.module.css';

const Poem = () => {
    return (
      <section className={styles.poem}>
        <h2 className="text-3xl font-semibold mb-6">Puisi</h2>
        <p className="italic max-w-2xl mx-auto">
          Di hari bahagia ini<br />
          Biarlah doa jadi pelangi<br />
          Harapan jadi mentari<br />
          Dan senyum jadi pelipur hati 🎂
        </p>
      </section>
    );
  };
  
  export default Poem;
  