
// Imports

import styles from "./BuscadorCep.module.css";
import {FiSearch} from 'react-icons/fi';
import { useState } from "react";
import api from "../services/api";

const BuscadorCep = () => {

    const [input, setInput] = useState('')

    const handleSearch = async () => {
        if(input === ""){
            alert("Preencha algum cep!")
            return;
        }

        try{

            const response = await api.get(`${input}/json`);
            console.log(response)

        }catch{
            alert("Erro ao buscar!")
        }

     // 01310930/json
    }
    return(
        <>
        <section className={styles.container}>
        <h1 className={styles.title}>Buscador Cep</h1>

        <div className={styles.containerInput}>
            <input
             type="text"
             placeholder="Digite seu cep..."
             value={input}
             onChange={(e)=> setInput(e.target.value)}
              />

              <button className={styles.buttonSearch} onClick={handleSearch}>
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