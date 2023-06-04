
import playicon from "../assets/imgs/play16.png"
import AnimeVideoContainer from '../components/AnimeVideoContainer'
import AnimeEmisionContainer from '../components/AnimeEmisionContainer'
import AnimeEstreno from '../components/AnimeEstreno'

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
            <AnimeEmisionContainer></AnimeEmisionContainer>
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
            <div className='anime-container'>
                  <AnimeEstreno title={'jano tonto'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
                  <AnimeEstreno title={'paco'} type={''} url={''}/>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MainPage