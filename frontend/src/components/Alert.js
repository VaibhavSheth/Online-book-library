import React from 'react'

const Alert1 = () => {
  return (
    <>
           <div class="alert alert-dismissible alert-success">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Order Placed!</strong> You successfully placed an order <a href="#" class="alert-link">check email for the reciept</a>.
            </div>
    </>
  )
}

export default Alert1
