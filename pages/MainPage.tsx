
import playicon from "../assets/imgs/play16.png"
import AnimeVideoContainer from '../components/AnimeVideoContainer'
import AnimeEmisionContainer from '../components/AnimeEmisionContainer'

import '../css/App.css'
import '../css/AnimeEstreno.css'
import '../css/Emision.css'
import '../css/Video.css'
import AnimeEstrenoContainer from "../components/AnimeEstrenoContainer"

function MainPage(){
    return(
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
            <AnimeEmisionContainer/>
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
              <AnimeVideoContainer></AnimeVideoContainer>
            <div className='lastepisodes-header'>
              <h2>Últimos animes agregados</h2>         
              <div className='today'>
                <h4>HOY</h4>
              </div>
            </div>
            <AnimeEstrenoContainer></AnimeEstrenoContainer>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MainPage