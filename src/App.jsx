
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/watchHistory'


function App() {

  return (
    <>
      <Header/>
<Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/Home' element={<Home/>}/>
 <Route path='/WatchHistory' element={<WatchHistory/>}/>
</Routes>

      <Footer/>
    </>
  )
}

export default App
