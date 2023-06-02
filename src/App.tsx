import './css/App.css'
import './css/Video.css'
import './css/Emision.css'
import searchicon from "./assets/imgs/search-icon16.png"
import usericon from "./assets/imgs/user30.png"
import playicon from "./assets/imgs/play16.png"
import Video from './components/Video'
import AnimeEmision from './components/AnimeEmision'
function App() {
  return (
    <>
    <div className='header'>
      <div className='header-container'>
        <div className='title'>
          <h1>AnimeWeb</h1>
        </div>
        <div className='navbar'>
          <a href='#'>INICIO</a>
          <a href='#' id='hentai'>HENTAI</a>
          <a href='#'>DIRECTORIO ANIME</a>
          <div className='search-bar'>
            <input type="text" placeholder='Search...'/>
            <button className='search-button' type="button"></button>
          </div>
          <button id="login"className='loginButton'>
            <img src={usericon}/>
            <h4>LOGIN</h4>
          </button>
        </div>
      </div>
    </div>
    <div className='main-content'>
      <div className='animeDIV'>
        AnimeWeb tu fuente de anime gratis en HD
      </div>
      <div className='content'>
        <div className='left'>
          <div className='left-content'>
            <div className='emision'>
              <h3>ANIMES EN EMISIÓN</h3>
              <img src={playicon} alt="" />
            </div>
            <div className='emision-items'>
              {/* emission anime componentes */}
              <AnimeEmision title='One Piece' type=''></AnimeEmision>
              <AnimeEmision title='Naruto' type=''></AnimeEmision>
              <AnimeEmision title='Fairy Tail' type=''></AnimeEmision>
              <AnimeEmision title='Bocchi The Rock!' type=''></AnimeEmision>
              <AnimeEmision title='' type=''></AnimeEmision>
              <AnimeEmision title='' type=''></AnimeEmision>
              <AnimeEmision title='' type=''></AnimeEmision>
              <AnimeEmision title='' type=''></AnimeEmision>
              <AnimeEmision title='' type=''></AnimeEmision>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='right-content'>
            <div className='lastepisodes-header'>
              <h2>Últimos episodios</h2>         
            <div className='today'>
              <h4>HOY</h4>
              </div>
            </div>
            <div className='vidcontainer'>
                {/* each video react */}
                <Video title='One Piece' episodeCount={1061} backgroundURL='https://areajugones.sport.es/wp-content/uploads/2022/09/one-piece-3-1080x609.jpg'/>
                <Video title='Naruto: Shippuden' episodeCount={500} backgroundURL='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/naruto-2979904.jpg?tf=3840x'/>
                <Video title='Monster' episodeCount={74} backgroundURL='https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/12/Monster-Netflix.webp'/>
                <Video title='FullMetal Alchemeist' episodeCount={64} backgroundURL='https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/03/anime-dengan-filler-terbanyak-fullmetal-alchemist-e1459334713687.jpg?fit=2560%2C1440&ssl=1'/>
                <Video title='Code Geass' episodeCount={25} backgroundURL='https://wallpapercave.com/wp/wp8969296.jpg'/>
                <Video title='Fairy Tail' episodeCount={400} backgroundURL='https://wallpapers.com/images/featured/sbq5hw7lab1lv1ba.jpg'></Video>
                <Video title='Evangelion' episodeCount={25} backgroundURL='https://steamuserimages-a.akamaihd.net/ugc/1758063146537856753/6E74938FCFB0F0B27B3929E292619EFDC9E9DCC9/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'></Video>
                <Video title='SpyXFamily' episodeCount={25} backgroundURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGE3QkCX5CnNtBClnZ-rRHKcqHzvvq5c5vw&usqp=CAU'></Video>
                <Video title='Kono Subarashii Sekai ni Shukufuku wo!' episodeCount={13} backgroundURL='https://ramenparados.com/wp-content/uploads/2021/07/KonoSuba-new-anime-2021.jpg'></Video>
                <Video title={'Tensei Shitara Slime Datta Ken'} episodeCount={25} backgroundURL={'https://areajugones.sport.es/wp-content/uploads/2020/03/Tensei-Shitara-Slime-Datta-Ken.jpg'}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
                <Video title={''} episodeCount={0} backgroundURL={''}></Video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className='footer'>
      copyright katarem
    </footer>
    </>
  )
}

export default App
