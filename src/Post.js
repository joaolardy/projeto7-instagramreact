import React from "react";

export default function Post(props) {
    const [numCurtidas, setNumCurtidas] = React.useState(101.523);
    const [curtida, setCurtida] = React.useState(false);
    const [iconeCurtir, setIconeCurtir] = React.useState("heart-outline");


    const [postSalvo, setPostSalvo] = React.useState(false);
    const [iconeSalvar, setIconeSalvar] = React.useState("bookmark-outline");
    const [styleCurtir, setStyleCurtir] = React.useState("");

    function curtirFoto(){
        let numCurtidasAtualizado;
        if(curtida === false){
            numCurtidasAtualizado = numCurtidas + 0.001;
            setNumCurtidas(numCurtidasAtualizado);
            setCurtida(true);
            setIconeCurtir('heart');
            setStyleCurtir("red")
        }else{
            numCurtidasAtualizado = numCurtidas - 0.001;
            setNumCurtidas(numCurtidasAtualizado);
            setCurtida(false);
            setIconeCurtir('heart-outline');
            setStyleCurtir('');
        }
    }

    function curtirFotoPelaImagem(){
        let numCurtidasAtualizado;
        if(curtida === false){
            numCurtidasAtualizado = numCurtidas + 0.001;
            setNumCurtidas(numCurtidasAtualizado);
            setCurtida(true);
            setIconeCurtir('heart');
            setStyleCurtir("red")
        }
    }

    function salvarFoto(){
        if(postSalvo === false){
            setPostSalvo(true);
            setIconeSalvar('bookmark');
        }else{
            setPostSalvo(false);
            setIconeSalvar("bookmark-outline");
        }
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img alt='' src={props.usuarioSrc} />
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick={curtirFotoPelaImagem} alt='' src={props.conteudoSrc} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={curtirFoto} name={iconeCurtir} class={styleCurtir} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarFoto} name={iconeSalvar}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img alt='' src={props.curtidasSrc} />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {numCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}