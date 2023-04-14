import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDmvRQFjzGfGelG7m5sLetXq7rYun1fmLI",
  authDomain: "lidl-netflix.firebaseapp.com",
  projectId: "lidl-netflix",
  storageBucket: "lidl-netflix.appspot.com",
  messagingSenderId: "356273642418",
  appId: "1:356273642418:web:71b3c33fdfceaed22622ab"
};
// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)


// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()


export {projectFirestore}