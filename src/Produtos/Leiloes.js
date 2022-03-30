import styles from './Ofertas.module.css';
import Head from '../Components/Head';

function Leiloes() {
  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title="Coringa | Leilões" />
      <div>
        <h1>Grupo de Leilões</h1>
        <span className={styles.preco}>R$30/mês</span>
        <p className={styles.descricao}>
          Produto relacionado à divulgação de lotes para pessoas físicas que
          garantem uma compra bem abaixo do valor de mercado dos protudos deste.
        </p>
      </div>
    </section>
  );
}

export default Leiloes;
