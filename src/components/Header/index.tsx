import Image from 'next/image';
import { ReactTypical } from '@deadcoder0904/react-typical'
import NavBar from '../NavBar';

import imgProfile from '../../../public/profile.jpg';
import styles from './styles.module.scss';

export default function Header() {  
  return(
    <div className={styles.container}>
      <div className={styles.content}>
      <NavBar/>
        <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <Image
              className={styles.img}
              src={imgProfile}
              alt="Profile"
              width={200} height={200}
            />
          </div>  
          <div className={styles.name}>
            <h1>Alberto Consoli</h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>
              <ReactTypical
              steps={['ReactJS',1000, 'NextJs',1000,'TypeScript',1000,'SASS',1000,'Styled-Component',1000,'FireBase',1000]}
              loop={Infinity}
              wrapper="p"
              />
            </p>
          </div>
        </div>        
      </div>
    </div>
  )
}

