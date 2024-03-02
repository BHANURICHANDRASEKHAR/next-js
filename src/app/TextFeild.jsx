import React from 'react'
import inputcss from '@/app/textfeild.module.css'
export default function TextFeild({name,type}) {
  return (
    <div>
    <label>{name}</label>
    <input type={type} name={name} className={inputcss.input}/>
        </div>
  )
}
