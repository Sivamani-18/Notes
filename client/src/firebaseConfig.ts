import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC94EDwRpTTwbI2dkeYP2fYs3K1BxCiWhM',
  authDomain: 'notes-and-list.firebaseapp.com',
  projectId: 'notes-and-list',
  storageBucket: 'notes-and-list.appspot.com',
  messagingSenderId: '132645032406',
  appId: '1:132645032406:web:7c92010483573046b35477',
  measurementId: 'G-8HB439CLBS',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
