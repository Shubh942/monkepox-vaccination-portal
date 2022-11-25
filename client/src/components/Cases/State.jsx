import React from 'react'

const State = ({ state }) => {
  return (
    <div className="state-list" key={state.source.id}>
      <div className="card">
        <h2 className="title">{state.title}</h2>
        <p>{state.date.total}</p>
      </div>
      console.log(state)
    </div>
  )
}

export default State