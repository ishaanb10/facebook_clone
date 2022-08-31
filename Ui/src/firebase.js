import { getAuth } from 'firebase/auth';
import {initializeApp} from'firebase/app';
 import  {getStorage} from"firebase/storage";
import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //... 
   apiKey: "AIzaSyCriQIPsoWMbUU4aeYFcycmvVZ1gwRFuTU",
    authDomain: "facebook-clone-49754.firebaseapp.com",
    projectId: "facebook-clone-49754",
    storageBucket: "facebook-clone-49754.appspot.com",
    messagingSenderId: "43913614296",
    appId: "1:43913614296:web:32a8ac3b82ce91aa00d8ad"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
export{firebase}


