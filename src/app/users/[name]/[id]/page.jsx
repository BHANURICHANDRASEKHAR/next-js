import React from 'react'

export default function page({params}) {
    console.log(params)
  return (
  <div><h1>your id is the {params.id} and your name is {params.name}</h1></div>
  )
}
