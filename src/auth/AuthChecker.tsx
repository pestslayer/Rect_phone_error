import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children}: Props) => {
    const navigate = useNavigate();
    // This will just check if the user is logged in, if so, it returns the children 
    // (which are passed as props - it's just whatever componet is either protected)
    // or not)
    // otherwise it sends them to the login route
    const [user,setUser] = useState(auth.currentUser);
    useEffect(() => {
        if (!user) {
            navigate('../')
            signInWithPopup(auth, Providers.google)
        }
    }, [user])
  return (
    <>{children}</>
  )
}

export default AuthChecker