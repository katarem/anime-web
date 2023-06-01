import './App.css'
import usericon from "./assets/imgs/user30.png"
function App() {
var loginClicked: boolean = false;
  return (
    <>
    <div className='header'>
      <div className='header-container'>
        <h1>Anime web</h1>
          <a href='#'>INICIO</a>
          <a href='#'>HENTAI</a>
          <a href='#'>DIRECTORIO ANIME</a>
        <div className='search-bar'>
          <input type="text" placeholder='Search...'/>
          <button className='search-button' type="button"></button>
        </div>
        <button id="login"className='loginButton' onClick={() =>{

          const button = document.getElementById("login");
          console.log("clicked")
          if(!loginClicked) {button?.classList.toggle("loginButton-clicked"); loginClicked = true}
          else {button?.classList.toggle("loginButton"); loginClicked = false}

        }}>
          <img src={usericon}/>
          <h4>LOGIN</h4>
        </button>
      </div>
    </div>
    <div className='main-content'>
      
    </div>
    <footer>
      copyright katarem
    </footer>
    </>
  )
}

export default App
