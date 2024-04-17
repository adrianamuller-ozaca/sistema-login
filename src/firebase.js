import firebase from 'firebase/app';
import 'firebase/auth';  // Para autenticação
import 'firebase/firestore';  // Para banco de dados Firestore
import 'firebase/storage';  // Para armazenamento de arquivos
import { db } from '../../firebase';


const firebaseConfig = {
    apiKey: "AIzaSyByNxzKV-R2cyiozuF058_9IedCitCNZF8",
    authDomain: "sistema-de-login-puc-pr.firebaseapp.com",
    projectId: "sistema-de-login-puc-pr",
    storageBucket: "sistema-de-login-puc-pr.appspot.com",
    messagingSenderId: "846201295155",
    appId: "1:846201295155:web:4419662a62ec44a7ee6e46"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Serviços do Firebase
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default { db, auth, storage };
