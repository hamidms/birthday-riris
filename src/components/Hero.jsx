import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Selamat Ulang Tahun!</h1>
      <p className={styles.subtitle}>Semoga hari-harimu selalu bahagia 🎉</p>
    </section>
  );
}
