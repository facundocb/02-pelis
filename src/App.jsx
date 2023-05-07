import './App.css'
import Card from './components/Card'
import vehicles from './components/data/vehicles'



function App() {
  const vehiclesList = vehicles.map(v =>{
    return <Card title={v.name} description={v.description}/>
  })
return (
  <div className='App'>
    <h1>Holaaa</h1>
    <div className="container">
     {vehiclesList}
    </div>
  </div>
  )
}

export default App
