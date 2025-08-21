
// Imports

import styles from "./BuscadorCep.module.css";
import {FiSearch} from 'react-icons/fi';
import { useState } from "react";
import api from "../services/api";

const BuscadorCep = () => {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})

    const handleSearch = async () => {
        if(input === ""){
            alert("Preencha algum cep!")
            return;
        }

        try{

            const response = await api.get(`${input}/json`);
            setCep(response.data)
            setInput("");

        }catch{
            alert("Erro ao buscar!")
            setInput("")
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

        {Object.keys(cep).length > 0 && (

            <main className={styles.main}>
                <h2>Cep: {cep.cep}</h2>

                <span>{cep.logradouro}</span>
                <span>Complemento: {cep.complemento}</span>
                <span>{cep.bairro}</span>
                <span>{cep.localidade} - {cep.uf}</span>
        </main>

        )}
        
    </section>
        </>
    )
    
}

export default BuscadorCep;