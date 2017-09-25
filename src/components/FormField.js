import React from 'react'

const FormField = ({
  type,
  input,
  componentType,
  meta: { active, touched, error }
}) => (
  <div>
    {componentType === 'input' ? (
      <div>
        <input {...input} type={type} />
        <div className="errors">{!active && touched && error}</div>
      </div>
    ) : (
      <div>
        <textarea {...input} type={type} />
        <div className="errors">{!active && touched && error}</div>
      </div>
    )}
  </div>
)

export default FormField
