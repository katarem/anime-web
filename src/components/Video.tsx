import playvid from "../assets/imgs/playvid16.png"

function Video({title, episodeCount, backgroundURL} : VideoBuilder){
    if(title.length === 0)
        title = 'ExampleAnime';
    if(episodeCount === 0)
        episodeCount = 12;
    if(backgroundURL.length === 0)
        backgroundURL='https://www.pixelstalk.net/wp-content/uploads/images6/Anime-Wallpaper-Aesthetic-Wallpaper-Shounen-Jump-1.jpg'

    const divStyle : React.CSSProperties = {
        backgroundImage: `url(${backgroundURL})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
    }



    return(
        <div className='video' style={divStyle}>      
                  <div className='play'>
                    <img src={playvid}/>
                  </div>
                  <div className='episode'>
                        Episodio {episodeCount}
                    </div>
                  <div className='episode-title'>
                    {title}
                      </div>
                </div>
    );
}

export default Video;