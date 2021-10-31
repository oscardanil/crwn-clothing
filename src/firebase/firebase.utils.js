import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyCvPokcjr1kC8ctpOcOURFrUZv5TSZX3jk",
    authDomain: "crwn-db-96e2a.firebaseapp.com",
    projectId: "crwn-db-96e2a",
    storageBucket: "crwn-db-96e2a.appspot.com",
    messagingSenderId: "664193614700",
    appId: "1:664193614700:web:9bd869adf498d21d17e949",
    measurementId: "G-GN1TYNXZVS"
  };
   
  export const createUserProfileDocument= async (userAuth, additionalData)=>{
    if(!userAuth) return;
   
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData})
      }catch(error){
        console.log('Error creating user', error.message);
      }
    }
    
  return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;