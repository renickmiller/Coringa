import styles from './Ofertas.module.css';
import Head from '../Components/Head';

function Btc() {
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title="Coringa | Bitcoiners" />
      <div>
        <h1>Grupo Análise sobre Criptomoedas</h1>
        <span className={styles.preco}>R$100/mês</span>
        <p className={styles.descricao}>
          Aqui se encontra as análises diárias, semanais e mensais dos
          principais ativos deste mercado de renda variável que possibilita
          ganhos exorbitantes através de nossas calls.
        </p>
      </div>
    </section>
  );
}

export default Btc;
