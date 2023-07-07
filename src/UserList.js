import React, { useEffect, useState } from 'react'//imp useeffect + use state des hooks
import axios from "axios";//imp axios after download widh key npm i axios
import Users from './Users';//imp component User to make the card
function UserList() {
    const [listOfUSer,setlistOfUSer]=useState()
    useEffect(()=>{
 axios.get("https://jsonplaceholder.typicode.com/users")
 .then(res=>setlistOfUSer(res))

    },[])
  return (
    <div>{(listOfUSer)? listOfUSer.data.map(el=><Users user={el}/>) : <h1>Wait</h1>}</div>
  )
}

export default UserList