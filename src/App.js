
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"
import NewPopular from './pages/NewPopular'
import MyList from "./pages/NewPopular"
import Browse from "./pages/Browse"
import OneMovie from './components/OneMovie'
const App = () => {
  return <BrowserRouter>
            <Routes>

              <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='TvShows'element={<TvShows/>}/>
              <Route path='newPopular'element={<NewPopular/>}/>
              <Route path='MyList'element={<MyList/>}/>
              <Route path='Browse'element={<Browse/>}/>
              <Route path='/one-movie/:movieId' element={<OneMovie/>}/>
              </Route>
              <Route path='Movies'element={<Movies/>}></Route>
            </Routes>
  </BrowserRouter>
}

export default App