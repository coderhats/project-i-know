const firebaseConfig = {
  apiKey: "AIzaSyBjD5kksmD1UStsmtK0v39wgSgFVRz55N8",
  authDomain: "kwitterohio.firebaseapp.com",
  databaseURL: "https://kwitterohio-default-rtdb.firebaseio.com",
  projectId: "kwitterohio",
  storageBucket: "kwitterohio.appspot.com",
  messagingSenderId: "249972745986",
  appId: "1:249972745986:web:fa2ec25bab1737d98b841b"
};
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE\
var User = "" 
User =localStorage.getItem("name")
document.getElementById("user_name").innerHTML='Welcome ' +User +"!" ;
function AddRoom(){
  text_value = document.getElementById("room_name").value;
  firebase.database().ref("/").child(text_value).update({
      purppose : "add_room_name"
  })
  localStorage.setItem("Room_names" , text_value);
  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("Room_names -" + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"></div><hr>";
          document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("Room_names" , name)
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("Room_names")
  window.location="index.html";
}