import React, { Fragment } from 'react';

function App (props) {

  const modificarNome = (event) => {
    console.log(event.target.value);
  }

  const criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"];
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>);
    return (
      <select>
        {comboBoxOpcoes}
      </select>        
    );
  }

    const MeuComboBox = () => criaComboBox();

    return (
      <Fragment>
        <input className="texto-centralizado" type="text" value={props.nome} onChange={modificarNome}></input>
        <h1>
          Olá mundo do {props.nome} sua idade é {props.idade}!
        </h1>
        <MeuComboBox />
      </Fragment>
    );
}

export default App;
