import { useEffect, useState } from "react";
import initializefirebase from "../Pages/Login/Login/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken} from "firebase/auth";


  //--------- initializefirebase---------
initializefirebase();

const useFirebase = () => {
    
        const [user, setUser] = useState({});
        const [error, setError] = useState('');
        const [loding, setLoding] = useState(true);
        const [admin, setAdmin] = useState(false);
        const [token, setToken] = useState('');

        const auth = getAuth();
        const googleAuthProvider = new GoogleAuthProvider();

        const registerUser = (email, Password, name, history) => {
          setLoding(true);
            createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
              setError('');
              const newUser = {email, displayName: name};
              setUser(newUser);
               // save user to the data base
               saveUser(email, name, 'POST');

                  // send name yo firebase
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              })
               history.replace('/')
              })
              .catch((error) => {
                // const errorCode = error.code;
                setError(error.message)
                // ..
              })
              .finally ( () => setLoding(false));
        }

        const loginUser = (email, password, location, history) => {
          console.log(email, password, location, history);
          setLoding(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             
              const destination = location?.state?.from || '/home';
              history.replace(destination);
            setError('');
            })
            .catch((error) => {
            setError(error.message)
  })
  .finally ( () => setLoding(false));
            
        }

        const signInWithGoogle = (location, history) => {
          setLoding(true);
          signInWithPopup(auth, googleAuthProvider)
          .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setError('');
            const destination = location?.state?.from || '/home';
            history.replace(destination);
           
          }).catch((error) => {         
             setError(error.message);
           
          })
          .finally ( () => setLoding(false));
        }

        // --------observe user state--------

        useEffect( () => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                        
                  setUser(user);
                  getIdToken(user)
                  .then(idToken => {
                    setToken(idToken);
                  })
                 
                } else {
                    setUser({})
                  
                }
                setLoding(false);
              });
              return () => unsubscribe;
        },[]);

        useEffect( () => {
          fetch(`https://mighty-thicket-37002.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin));
        }, [user.email])

        const logOut = () => {
          setLoding(true);
            signOut(auth)
            .then(() => {
              setError('');
              }).catch((error) => {
                // An error happened.
                setError(error.message)
                
              })
              .finally ( () => setLoding(false));
        }
        const saveUser = (email, displayName, method) => {
          const user = {email, displayName};
          fetch('https://mighty-thicket-37002.herokuapp.com/users', {
            method: method,
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            
          })
          .then()
        }
 
        return{
            user,
            admin,
            token,
            registerUser,
            loginUser,
            signInWithGoogle,
            logOut,
            loding,
            error,
        }
}


export default useFirebase;