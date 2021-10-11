import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.initilize";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error,setError] = useState('');
  
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signinUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result.user);
      setUser(result.user);
    })
    .catch(error => {
      setError(error.message);
  })
  }

  return {
    user,error,signinUsingGoogle,
    
}
};
export default useFirebase;
