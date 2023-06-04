import "../css/AnimeEstreno.css"

function AnimeEstreno({title, type, url} : AnimeEstrenoBuilder){

    if(title === '')
        title = 'Anime de Ejemplo';
    if(type === '')
        type = 'ANIME'
    if(url === '')
        url = 'https://images5.alphacoders.com/481/481903.png';

    const divStyle : React.CSSProperties = {
        backgroundImage: `url(${url})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
    }


    return(
        <div className="anime-estreno">
            <div className="anime-estreno-poster" style={divStyle}>
                <div>{type}</div>
            </div>
            <h3>{title}</h3>
        </div>
    )


}

export default AnimeEstreno;