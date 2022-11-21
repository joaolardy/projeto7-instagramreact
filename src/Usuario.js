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
        <div data-test="user" className="usuario">
            <img data-test="profile-image" onClick={alterarImagem} alt='' src={imagem} />
            <div className="texto">
                <strong>{usuario}</strong>
                <span className="row">
                    <div data-test="name" className="flex">{nome}</div> 
                    <ion-icon data-test="edit-name" onClick={alterarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}