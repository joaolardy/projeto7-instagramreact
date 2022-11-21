import Post from './Post.js'

export default function Posts() {
    const posts = [
        {usuarioSrc:'assets/img/meowed.svg', nomeUsuario:'meowed', conteudoSrc:'assets/img/gato-telefone.svg', curtidasSrc:'assets/img/respondeai.svg'},
        {usuarioSrc:'assets/img/barked.svg', nomeUsuario:'barked', conteudoSrc:'assets/img/dog.svg', curtidasSrc:'assets/img/adorable_animals.svg'},
        {usuarioSrc:'assets/img/barked.svg', nomeUsuario:'barked', conteudoSrc:'assets/img/dog.svg', curtidasSrc:'assets/img/adorable_animals.svg'}
    ]
    return (
        <div className="posts">
            {posts.map((post) => <Post usuarioSrc={post.usuarioSrc} nomeUsuario={post.nomeUsuario} conteudoSrc={post.conteudoSrc} curtidasSrc={post.curtidasSrc} />)}
        </div>
    );
}
