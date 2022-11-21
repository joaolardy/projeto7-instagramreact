import Sugestao from './Sugestao';

export default function Sugestoes() {
    const sugestoes =[
        {src: "assets/img/bad.vibes.memes.svg", nome: 'bad.vibes.memes', razao: 'Segue você'},
        {src: "assets/img/chibirdart.svg", nome: 'chibirdart', razao: 'Segue você'},
        {src:'assets/img/razoesparaacreditar.svg', nome:'razoesparaacreditar', razao:'Novo no Instagram'},
        {src: "assets/img/adorable_animals.svg", nome: 'adorable_animals', razao: 'Segue você'},
        {src: "assets/img/smallcutecats.svg", nome: 'smallcutecats', razao: 'Segue você'}
    ]
    
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao src={sugestao.src} nome={sugestao.nome} razao={sugestao.razao} />)}
        </div>
    );
}
