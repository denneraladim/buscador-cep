
const BuscadorCep = () => {
    return (
        <>
        <section className="Container">
        <h1 className="title">Buscador CEP</h1>
    </section>
    <form className="containerInput">
        <input
         type="text"
         placeholder="Digite seu cep..."
          />
          <button className="buttonSearch">Procurar</button>
    </form>
        </>
        
    )
    
}

export default BuscadorCep;