import usericon from "../assets/imgs/user30.png";

function Navbar(){
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='title'>
                <h1>AnimeWeb</h1>
                </div>
                <div className='navbar'>
                <a href="/">INICIO</a>
                <a href="/hentai">HENTAI</a>
                <a>DIRECTORIO ANIME</a>
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
    );
}

export default Navbar