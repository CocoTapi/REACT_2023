import Header from './components/header';
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Hi</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
  );
}
