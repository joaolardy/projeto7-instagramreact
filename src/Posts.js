import Post from './Post.js'

export default function Posts() {
    const posts = [
        {usuarioSrc:'assets/img/joaolardy.png', nomeUsuario:'joaolardy', conteudoSrc:'assets/img/fusca.png', curtidasSrc:'assets/img/respondeai.svg'},
        {usuarioSrc:'assets/img/masteryi.png', nomeUsuario:'masteryi', conteudoSrc:'assets/img/master.png', curtidasSrc:'assets/img/respondeai.svg'},
        {usuarioSrc:'assets/img/barked.svg', nomeUsuario:'barked', conteudoSrc:'assets/img/dog.svg', curtidasSrc:'assets/img/respondeai.svg'}
    ]
    return (
        <div className="posts">
            {posts.map((post) => <Post usuarioSrc={post.usuarioSrc} nomeUsuario={post.nomeUsuario} conteudoSrc={post.conteudoSrc} curtidasSrc={post.curtidasSrc} />)}
        </div>
    );
}
