 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBiWWlHAbG9e6DdsGJWbplxI5rCvJEBJ2k",
   authDomain: "fir-practica-68a07.firebaseapp.com",
   projectId: "fir-practica-68a07",
   storageBucket: "fir-practica-68a07.firebasestorage.app",
   messagingSenderId: "554413382275",
   appId: "1:554413382275:web:fc929cad729916ed4dd9b6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 let conectar = document.querySelector('#conectar')

 conectar.onclick = function(){
     console.log('firebase conectado correctamente ' + app.name)
 }