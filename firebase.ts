// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBFmpdW-tMOXpSn0dZm3g3ZqmWF4ppe-D4',
  authDomain: 'chat-gpt-7986d.firebaseapp.com',
  projectId: 'chat-gpt-7986d',
  storageBucket: 'chat-gpt-7986d.appspot.com',
  messagingSenderId: '685243838353',
  appId: '1:685243838353:web:e5e6176ba0cfae7298f430',
  measurementId: 'G-T2C3WJDZDT',
};

// Initialize Firebase
const app = getApps()?.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db