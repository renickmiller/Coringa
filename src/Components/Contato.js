import styles from './Contato.module.css';
import foto from '../img/contato.png';
import Head from './Head';

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Coringa | Contato" description="Entre em contato" />
      <img src={foto} alt="Entre em contato conosco" />
      <div>
        <h1>Entre em contato com a equipe Coringa</h1>
        <ul className={styles.dados}>
          <li>coringa@gmail.com</li>
          <li>92424-2424</li>
          <li>Quem dorme sonha, quem vive realiza irmão! </li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
