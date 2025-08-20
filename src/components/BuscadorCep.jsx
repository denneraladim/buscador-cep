// Imports
import styles from "./BuscadorCep.module.css";
import { FiSearch } from "react-icons/fi";

const BuscadorCep = () => {
  return (
    <>

      <section className={styles.container}>
        <h1 className={styles.title}>Buscador Cep</h1>
        <form className={styles.containerInput}>
          <label htmlFor="cepInput" className="sr-only">
            Digite seu CEP
          </label>
          <input
            id="cepInput"
            type="search"
            placeholder="Digite seu cep..."
          />
          <button className={styles.buttonSearch}>
            <FiSearch size={25} color="#FFF" />
          </button>
        </form>
        <main className={styles.main}>
          <h2>Cep: 79003222</h2>
          <address>
            <p>Rua teste algum</p>
            <p>Complemento: algum complemento</p>
            <p>Vila Rosa</p>
            <p>Campo Grande - MS</p>
          </address>
          </main>
      </section>
    </>
  );
};

export default BuscadorCep;
