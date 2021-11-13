// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOjpTA0-h2plEkokbL44nPyDN3e66P4yQ',
  authDomain: 'its-my-birthday-f35cf.firebaseapp.com',
  projectId: 'its-my-birthday-f35cf',
  storageBucket: 'its-my-birthday-f35cf.appspot.com',
  messagingSenderId: '543792528621',
  appId: '1:543792528621:web:62a6f88ac33e4083f020e4',
  measurementId: 'G-KPCXRKW16Q'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
