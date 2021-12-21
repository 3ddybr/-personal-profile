import Image from 'next/image';
import Typical from 'react-typical';

import styles from './styles.module.scss';


import imgProfile from '../../../public/profile.jpg';

export default function Header() {  
  return(
    <div className={styles.container}>
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


        </div>
    </div>
  )
}