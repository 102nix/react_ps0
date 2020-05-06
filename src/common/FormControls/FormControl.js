import React from 'react'

export const Input = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error 
  return (
    <div>
      <div>
        <input {...input} {...props} />
      </div>
      { hasError &&
        <small>{ meta.error }</small>
      }
    </div>
  )
}

export const Checkbox = ({input, meta, ...props}) => {
  return (
    <input {...input} {... props} />
  )
}