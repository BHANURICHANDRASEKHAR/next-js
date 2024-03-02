import React from 'react'

export default function UserProfile({params}) {
    console.log('user ',params)
  return (
    <div>UserProfile
    <div ><h1>User name is <span className='bg-warning rounded-pill w-100 p-2'> {params.name}</span></h1></div>
    </div>
  )
}
