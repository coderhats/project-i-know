//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("name");
    room_name=localStorage.getItem("Room_names");
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message : msg,
       like:0    
      });
      document.getElementById("msg").value="";



    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)'>" + like+"</button>";
row = name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("index.html");
}