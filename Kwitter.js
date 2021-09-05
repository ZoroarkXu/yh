const firebaseConfig = {
    apiKey: "AIzaSyBW6vd8neR_XXmzURxN3N9FUlratsLEIHc",
    authDomain: "badaboom-c0281.firebaseapp.com",
    databaseURL: "https://badaboom-c0281-default-rtdb.firebaseio.com",
    projectId: "badaboom-c0281",
    storageBucket: "badaboom-c0281.appspot.com",
    messagingSenderId: "918061736426",
    appId: "1:918061736426:web:f604e2c2b2cd379b2f5293",
    measurementId: "G-L4NERSBGL0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addingUser"
    });
}