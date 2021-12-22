import SanCarousel from 'sancarousel';

import styles from './styles.module.scss';
import slide1 from '../../../public/proffy.png';
import slide2 from '../../../public/ignews.jpg';
import slide3 from '../../../public/ignews-post.jpg';
import slide4 from '../../../public/dtmoney.gif';
import slide5 from '../../../public/dtmoney-logado.jpg';
import slide6 from '../../../public/jogo-memoria.png';
import slide7 from '../../../public/podcastr.svg';
import slide8 from '../../../public/alurakut.png';
import slide9 from '../../../public/alurakut-logado.png';


const slides = [
  {
    img: slide1.src,
    url: '/link-1'
  },
  {
    img: slide2.src,
    url: '/link-2'
  },
  {
    img: slide3.src,
    url: '/link-3'
  },
  {
    img: slide4.src,
    url: '/link-4'
  },
  {
    img: slide5.src,
    url: '/link-5'
  },
  {
    img: slide6.src,
    url: '/link-6'
  },
  {
    img: slide7.src,
    url: '/link-7'
  },
  {
    img: slide8.src,
    url: '/link-8'
  },
  {
    img: slide9.src,
    url: '/link-9'
  }
] 
// as unknown as slideData[]

export  function Carousel(){
  return(
    <div className={styles.container}>
      <SanCarousel 
      slides={slides}
      // transitionTime={1000}
      width='120rem'
      height="250px"
      slideSize="40rem"
      dots={true}
      autoPlay={3000}
      focusSlide={true}
      spaceBetweenSlides="0.5rem"
      slideFocusColor="#2E2D56"
      
      // arrows={false}
      // marginRightDots="0.5rem"
    />
    </div>
  )
}