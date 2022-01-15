import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar></Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Select <a href="/">RAISEC</a>
        </h1>

        <p className={styles.description}>
{' '}
        </p>

        <div className={styles.grid}>
          <Link href="/RAISEC/" className={styles.card}>
            <a className={styles.card}><h2>Realistic </h2></a>
          </Link>

          <Link href="/RAISEC/Artistic" className={styles.card}>
            <a className={styles.card}><h2>Artistic </h2></a>
          </Link>

          <Link href="/RAISEC/Investigative" className={styles.card}>
            <a className={styles.card}><h2>Investigative </h2></a>
          </Link>

          <Link href="/RAISEC/Social" className={styles.card}>
            <a className={styles.card}><h2>Social </h2></a>
          </Link>

          <Link href="/RAISEC/Enterprising" className={styles.card}>
            <a className={styles.card}><h2>Enterprising </h2></a>
          </Link>

          <Link href="/RAISEC/Conventional" className={styles.card}>
            <a className={styles.card}><h2>Conventional </h2></a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Career{' '}
        </a>
      </footer>
    </div>
  )
}
