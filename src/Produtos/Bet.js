import styles from './Ofertas.module.css';
import Head from '../Components/Head';

function Bet() {
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title="Coringa | Bets" />
      <div>
        <h1>Grupo de Entradas na BET365</h1>
        <span className={styles.preco}>R$60/mês</span>
        <p className={styles.descricao}>
          Este produto oferece um grupo VIP para frequentes entradas em todos os
          mercados de apostas, cantos, gols, xht, asiáticos, etc...
        </p>
      </div>
    </section>
  );
}

export default Bet;
