import Story from "./Story";

export default function Stories() {
    const stories = [
        {src: "assets/img/bqdc.png", usuario: 'bqdc'},
        {src: "assets/img/gg.png", usuario: 'greengo'},
        {src: "assets/img/ufmg.png", usuario: 'ufmg'},
        {src: "assets/img/pbh.png", usuario: 'belohorizonte'},
        {src: "assets/img/respondeai.svg", usuario: 'respondeai'},
        {src: "assets/img/startupdareal.png", usuario: 'startupdareal'},
        {src: "assets/img/driven.png", usuario: 'driven'},
        {src: "assets/img/meowed.svg", usuario: 'meowed'},
    ];
    return (
        <div className="stories">

            {stories.map(story => <Story src={story.src} usuario={story.usuario}/>)}
            
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}

