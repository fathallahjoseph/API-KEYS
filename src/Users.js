import React from 'react'//imp react
function Users({user}) {
  return (
    <div className='card'>
    <h1 className='id'>{user.id}</h1>
    <h1 className='name'>{user.name}</h1>
    <h1 className='email'>{user.email}</h1>
    <h1 className='adresse'>{user.adresse}</h1>
    </div>
  )
}

export default Users