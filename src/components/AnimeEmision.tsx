import play30 from "../assets/imgs/play30.png"

function AnimeEmision({title, type} : EmisionAnimeBuilder){
    if(title === "")
        title = "Anime de Temporada";
    if(type === "")
        type = "ANIME"

    return(
        <div className="emision">
            <div className="emision-anime">
                <img src={play30} alt="" />
                <h3>{title}</h3>
            </div>
            <div className="type-banner">
                <h3>{type}</h3>
            </div>
        </div>
    )
}

export default AnimeEmision