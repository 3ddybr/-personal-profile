import type { NextPage } from 'next'
import { Carousel } from '../components/Carousel'
import Header from '../components/Header'
import Image from 'next/image';

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
          
          <p 
          onClick={() => window.open('https://nextjs.org//', '_blank')}
          >
            🚀ReactJS | NextJS
          </p>
          <p>🚀Pac Básico (HTML | JavaScript | CSS)</p>
          <p
          onClick={() => window.open('https://www.typescriptlang.org/', '_blank')}
          >🚀TypeScript</p>
          <p
          onClick={() => window.open('https://pt-br.reactjs.org/docs/context.html', '_blank')}
          >🚀Context API </p>
          <p>🚀Mobal-Force</p>
          <p
          onClick={() => window.open('https://sass-lang.com/', '_blank')}
          >🚀SASS </p>
          <p
          onClick={() => window.open('https://styled-components.com/', '_blank')}
          >🚀Styled-Component</p>
          <p
          onClick={() => window.open('https://firebase.google.com/?hl=pt-br', '_blank')}
          >🚀FireBase</p>
        </div>
      </div>

      <div className={styles.cursos}>
        <h2>Cursos & Eventos</h2>
        <div className={styles.cursos_content}>
          <p
          onClick={() => window.open('https://github.com/3ddybr/proffy-react/', '_blank')}
          > NLW 02 🔥</p>
          <p
          onClick={() => window.open('https://github.com/3ddybr', '_blank')}          
          > NLW 03 🔥</p>
          <p
          onClick={() => window.open('https://github.com/3ddybr', '_blank')}          
          > NLW 04 🔥</p>
          <p
          onClick={() => window.open('https://github.com/3ddybr', '_blank')}          
          > NLW 05 🔥</p>
          <p
          onClick={() => window.open('https://github.com/3ddybr', '_blank')}          
          > NLW 06 🔥</p>
          <p
          onClick={() => window.open('https://www.rocketseat.com.br/', '_blank')}
          > Ignite ReactJS/NextJs 🔥</p>
        </div>

      </div>
        <div className={styles.footer}>
          <h2>Contato</h2>
          <div className={styles.footer_content}>
            <Image
              src='/linkedin.svg'
              alt='linkedin'
              width={100}
              height={100}
              onClick={() => window.open('https://www.linkedin.com/in/alberto-c-de-araujo-88a00a158/', '_blank')}
            />
            <Image
              src='/github.svg'
              alt='linkedin'
              width={100}
              height={100}
              onClick={() => window.open('https://github.com/3ddybr', '_blank')}
            />
            <Image
              src='/whatsapp.svg'
              alt='linkedin'
              width={100}
              height={100}
              onClick={() => window.open('https://wa.me/5528981132616', '_blank')}
              
            />
          </div>
        </div>

    </div>
  )
}

export default Home
