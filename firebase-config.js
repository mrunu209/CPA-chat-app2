const firebaseConfig = {
    apiKey: "AIzaSyDGnDIzn7h3g4VDr3QRVTKMX-YwSIi08tA",
    authDomain: "cpa-chat-app.firebaseapp.com",
    databaseURL: "https://cpa-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cpa-chat-app",
    storageBucket: "cpa-chat-app.firebasestorage.app",
    messagingSenderId: "962737312595",
    appId: "1:962737312595:web:f78141ffd2f585f8b107a6"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
