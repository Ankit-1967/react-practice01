import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="conatiner">
        <div class={`alert alert-${props.alert.type} mb-0 alert-dismissible fade show`} role="alert">
            <strong>{props.alert.message}</strong> .
        </div>
    </div>
  )
}
