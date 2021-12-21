import styles from './styles.module.scss';

export default function NavBar() {
  return(
    <div className={styles.container}>
      <nav>
        <ul>
          <li>Portfólio</li>
          <li>Tecnologias</li>
          <li>Cursos & Eventos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </div>
  )
}
