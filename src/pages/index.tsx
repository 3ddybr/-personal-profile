import type { NextPage } from 'next'
import { Carousel } from '../components/Carousel'
import Header from '../components/Header'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header/>
        <Carousel/>

      </div>
      <div className={styles.tecnologias}>
        <h2>Tecnologias</h2>
        <div className={styles.tecnologias_content}>
          
          <p>🚀ReactJS | NextJS </p>
          <p>🚀Pac Básico (HTML | JavaScript | CSS)</p>
          <p>🚀TypeScrip</p>
          <p>🚀Context API </p>
          <p>🚀Mobal-Force</p>
          <p>🚀SASS </p>
          <p>🚀Styled-Component</p>
          <p>🚀FireBase</p>
        </div>
      </div>

      <div className={styles.cursos}>
        <h2>Cursos & Eventos</h2>
        <div className={styles.cursos_content}>
          <p> NLW 02 🔥</p>
          <p> NLW 03 🔥</p>
          <p> NLW 04 🔥</p>
          <p> NLW 05 🔥</p>
          <p> NLW 06 🔥</p>
          <p> Ignite ReactJS/NextJs 🔥</p>
        </div>

        <div className={styles.footer}>
          <img src="" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Home
