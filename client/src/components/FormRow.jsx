import React from 'react'

export default function FormRow({ type, labelText, name, defaultValue = "" }) {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}

      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-input'
        defaultValue={defaultValue}
        required
      />
    </div>
  )
}
