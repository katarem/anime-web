import './css/App.css'
import './css/Video.css'
import './css/Emision.css'
import './css/AnimeEstreno.css'
import NavBar from './components/NavBar'
import MainPage from './pages/MainPage'
function App() {
  return (
    <>
    <NavBar/>
    <MainPage/>
    <footer className='footer'>
      copyright katarem
    </footer>
    </>
  )
}

export default App
