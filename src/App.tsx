import './App.css'
import { dataClear } from './components/ItemList'
import { Listing } from './components/Listing'

function App() {
  return (
    <>
      <Listing data={dataClear}/>
    </>
  )
}

export default App