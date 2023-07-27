function User_Name(){
    value=  document.getElementById("user_name").value ;
    localStorage.setItem('name',value)
    window.location='kwitter_room.html';
}