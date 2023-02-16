import { app } from "../Firebase/Configuracion";
import {
  getAuth, signInWithPopup, GoogleAuthProvider,
} from "firebase/auth";


// ----------------- AUTENTICACIÓN CON GOOGLE ---------------------------
const auth = getAuth(app)
export const loginWhitGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}

