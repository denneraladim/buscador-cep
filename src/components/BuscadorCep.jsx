

// Imports

import styles from "./BuscadorCep.module.css";

// Bibliotecas

import {FiSearch} from 'react-icons/fi';


const BuscadorCep = () => {
    return(
        <>
        <section className={styles.container}>
        <h1 className={styles.title}>Buscador Cep</h1>

        <div className={styles.containerInput}>
            <input
             type="text"
             placeholder="Digite seu cep..."
              />

              <button className={styles.buttonSearch}>
                <FiSearch size={25} color="#FFF"/>
              </button>
        </div>
        <main className={styles.main}>
            <h2>Cep: 79003222</h2>

            <span>Rua teste algum</span>
            <span>Complemento: algum complemento</span>
            <span>Vila Rosa</span>
            <span>Campo Grande - MS</span>
        </main>
    </section>
        </>
    )
    
}

export default BuscadorCep;