import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";



const initializefirebase = () =>{
    initializeApp(firebaseConfig);

}
export default initializefirebase;