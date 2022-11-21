import React from "react";

export default function Usuario(){
    const [nome, setNome] = React.useState('Joao Lardy');
    const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg')
    const usuario = 'joaolardy';

    function alterarNome(){
        let novoNome = prompt('Digite seu novo nome de usuário');
        setNome(novoNome);
    }

    function alterarImagem(){
        let novaImagem = prompt('Insira a url da sua nova foto de perfil');
        setImagem(novaImagem);
    }

    return(
        <div className="usuario">
            <img onClick={alterarImagem} alt='' src={imagem} />
            <div className="texto">
                <strong>{usuario}</strong>
                <span>
                    {nome} 
                    <ion-icon onClick={alterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}