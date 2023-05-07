import React from 'react'

function VehicleView({vehicle}) {
  return (
    <div>
      <h1>{vehicle.name}</h1>
      <h4>{vehicle.description}</h4>
      <img src={vehicle.image}></img>
    </div>
  )
}

export default VehicleView