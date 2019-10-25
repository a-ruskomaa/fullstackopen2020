import React from 'react'

const Notification = ({ notification }) => {

  const notificationStyle = {
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }


  const Error = ({ notification }) => {
    return (
      <div style={{color: 'red'}}>
        {notification.message}
      </div>
    )
  }

  const Info = ({ notification }) => {
    return (
      <div style={{color: 'green'}}>
        {notification.message}
      </div>
    )
  }

  if (notification === null) {
    return null
  }

  if (notification.type === 'error') {
    return (
      <div style={notificationStyle}>
        <Error notification={notification}/>
      </div>
    )
  }

  if (notification.type === 'info') {
    return (
      <div style={notificationStyle}>
        <Info notification={notification}/>
      </div>
    )
  }

  return (
    <div style={notificationStyle}>
      {notification.message}
    </div>
  )


}

export default Notification