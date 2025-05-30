import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path=':id' Component={DetailsPage} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
