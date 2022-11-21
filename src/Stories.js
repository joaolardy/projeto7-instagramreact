import Story from "./Story";

export default function Stories() {
    const stories = [
        {src: "assets/img/meowed.svg", usuario: 'meowed'},
        {src: "assets/img/barked.svg", usuario: 'barked'},
        {src: "assets/img/nathanwpylestrangeplanet.svg", usuario: 'nathanwpylestrangeplanet'},
        {src: "assets/img/wawawicomics.svg", usuario: 'wawawicomics'},
        {src: "assets/img/respondeai.svg", usuario: 'respondeai'},
        {src: "assets/img/filomoderna.svg", usuario: 'filomoderna'},
        {src: "assets/img/memeriagourmet.svg", usuario: 'memeriagourmet'},
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

