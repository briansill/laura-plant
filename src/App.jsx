import Banner from "./components/Banner"
import './App.css'
import Plant from "./components/Plant"
import PlantList from "./components/PlantList"
import { useState } from "react"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  const [selectedPlant, setSelectedPlant] = useState();

  return (
    <ErrorBoundary fallback="Something went wrong loading App.">
      <Banner>
        <div>Indoor Plant Caring Guide</div>
      </Banner>
      {selectedPlant ? <Plant plant={selectedPlant} />
        : <PlantList selectPlant={setSelectedPlant} />}
    </ErrorBoundary>
  )
}

export default App
