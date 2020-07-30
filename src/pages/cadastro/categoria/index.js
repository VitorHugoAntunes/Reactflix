import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

  const [nomeDaCategoria, setNomeDaCategoria] = useState('');
 
    return (
      <PageDefault>
        <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

        <form>

        <label>
            Nome da Categoria:
          <input
              placeholder="Filmes..."
              type="text"
              value={nomeDaCategoria}
              onChange={function handlerSubmit(event) {
                setNomeDaCategoria(event.target.value);
              }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

        <Link to="/">
          Voltar para home
        </Link>
      </PageDefault>
    )
}
  
export default CadastroCategoria;