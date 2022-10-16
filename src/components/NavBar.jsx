import React, {useContext} from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Friends Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="tt" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Déconnexion</button>
      </div>
    </div>
  )
}

export default NavBar