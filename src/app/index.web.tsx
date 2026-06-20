import { useState } from 'react';

import styles from './styles/counter.module.css';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Counter</h1>
        <output className={styles.count} aria-live="polite">
          {count}
        </output>

        <div className={styles.buttons}>
          <button
            className={styles.button}
            type="button"
            aria-label="Decrease count"
            onClick={() => setCount((currentCount) => currentCount - 1)}>
            −
          </button>
          <button
            className={`${styles.button} ${styles.resetButton}`}
            type="button"
            onClick={() => setCount(0)}>
            Reset
          </button>
          <button
            className={styles.button}
            type="button"
            aria-label="Increase count"
            onClick={() => setCount((currentCount) => currentCount + 1)}>
            +
          </button>
        </div>
      </section>
    </main>
  );
}
