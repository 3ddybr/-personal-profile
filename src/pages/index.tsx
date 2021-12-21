import type { NextPage } from 'next'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavBar/>
        <Header/>

      </div>
    </div>
  )
}

export default Home
