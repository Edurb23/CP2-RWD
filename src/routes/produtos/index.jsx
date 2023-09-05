import React from "react"
import { Link } from "react-router-dom"
import { listaProdtuos } from "../../listaProdutos/listaProdutos"




const Produtos = () => {
    return(
        <main>
            <h1>Produtos</h1>
            {listaProdtuos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o prouto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}

export default Produtos