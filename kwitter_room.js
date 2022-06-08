
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBwU2Vp7iFAPqLtYbqfIv7W9w1oaimWm9w",
  authDomain: "kwitter-b2e8f.firebaseapp.com",
  databaseURL: "https://kwitter-b2e8f-default-rtdb.firebaseio.com",
  projectId: "kwitter-b2e8f",
  storageBucket: "kwitter-b2e8f.appspot.com",
  messagingSenderId: "384881959809",
  appId: "1:384881959809:web:67c1e3cc285ec05e79be80"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");

 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

 function addRoom(){
       room_name=document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
             purpose:"adding user name"
       });
localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";

 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML +=row;

  //End code
  });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

