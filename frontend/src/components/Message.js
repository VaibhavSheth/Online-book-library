import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variants,children}) => {
  return (
    <Alert variant={variants}>
      {children}
    </Alert>
  )
}
Message.defaultProps={
  variant:'info'
}
export default Message