import React from 'react'

export default function page({params}) {
    const {slug} =params;
    console.log(slug)
    if(slug?.length>=1)
    {
        return <h1>hello {slug[0]}</h1>
    }
  return (
    <div>page</div>
  )
}
