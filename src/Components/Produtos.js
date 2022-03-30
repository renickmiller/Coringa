import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import bet from '../img/bet.png';
import btc from '../img/btc.jpg';
import leiloes from '../img/leiloes.jpg';
import programmers from '../img/programmers.jpg';
import Head from '../Components/Head';

function Produtos() {
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Coringa" />
      <Link to="produto/bet">
        <img src={bet} alt="Aposte já!" />
        <h1 className={styles.nome}>Bet365</h1>
      </Link>
      <Link to="produto/btc">
        <img src={btc} alt="Compre btc na baixa!" />
        <h1 className={styles.nome}>Bitcoins</h1>
      </Link>
      <Link to="produto/leiloes">
        <img src={leiloes} alt="Leilõõõões" />
        <h1 className={styles.nome}>Leilões</h1>
      </Link>
      <Link to="produto/programmers">
        <img src={programmers} alt="#ReactTáON" />
        <h1 className={styles.nome}>Programadores</h1>
      </Link>
    </section>
  );
}

export default Produtos;
