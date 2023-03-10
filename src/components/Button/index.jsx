import React from 'react';

export const CadastrarButton = (props) =>{
    return (
      <div>
        <button 
            onClick={props.onClick}
            type="submit">
            Cadastrar
        </button>
    </div>
    );
  }
  
export const SaibaButton = (props) =>{
    return (
    <button 
        onClick={props.onClick}
        type="button">
        Saiba Mais!
    </button>
    );
  }

export const EntrarButton = (props) => {
  return (
    <div>
      <button 
        onClick={props.onClick}
        type='submit'>
          Entrar
      </button>
    </div>
  )
}