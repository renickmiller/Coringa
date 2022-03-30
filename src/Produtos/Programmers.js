import styles from './Ofertas.module.css';
import Head from '../Components/Head';

function Programmers() {
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title="Coringa | Programmers" />
      <div>
        <h1>Grupo de Programadores</h1>
        <span className={styles.preco}>GRATUITO</span>
        <p className={styles.descricao}>
          Aqui se encontra a nata da sociedade, principalmente quem desenvolve
          no framework REACT (#ReactTáONNNN), só bora, o céu é o limite!
        </p>
      </div>
    </section>
  );
}

export default Programmers;
