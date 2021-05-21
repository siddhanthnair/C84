
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCAqYu-GayOTESI93FFlcwWgxTaCy2DeaA",
    authDomain: "kwitter-app-11eaa.firebaseapp.com",
    databaseURL: "https://kwitter-app-11eaa-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-11eaa",
    storageBucket: "kwitter-app-11eaa.appspot.com",
    messagingSenderId: "411370353199",
    appId: "1:411370353199:web:e550e7b7704e6f48470cda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      var username= document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
    purpose : "adding user"
      });
  }