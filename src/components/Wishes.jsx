import styles from '../styles/Wishes.module.css';

export default function Wishes() {
    return (
      <section className={styles.wishes}>
        <h2 className="text-3xl font-semibold text-center mb-6">Ucapan</h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li>🎈 Semoga panjang umur dan sehat selalu!</li>
          <li>💖 Semoga segala harapanmu tercapai!</li>
          <li>🥳 Nikmati hari spesialmu!</li>
        </ul>
      </section>
    );
  };
  
  