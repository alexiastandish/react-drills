import React from 'react'
import ToDo from './ToDo'

function List(props) {
  return (
    <div>
      {props.tasks.map(function(element) {
        return <ToDo task={element} />
      })}
    </div>
  )
}

export default List
