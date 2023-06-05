import './css/App.css'
import './css/AnimeEstreno.css'
import './css/Emision.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import HentaiPage from './pages/HentaiPage'
import Navbar from './src/components/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>
  },
  {
    path: "/hentai",
    element: <HentaiPage></HentaiPage>
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <footer className='footer'>
      copyright katarem
    </footer>
  </React.StrictMode>
)
