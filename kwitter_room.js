var firebaseConfig = {
      apiKey: "AIzaSyCn1B2VhO8A2HAxHqUxmzMAbxy1gOqentQ",
      authDomain: "kwitter-2-ecbaf.firebaseapp.com",
      databaseURL: "https://kwitter-2-ecbaf-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-ecbaf",
      storageBucket: "kwitter-2-ecbaf.appspot.com",
      messagingSenderId: "1075564158141",
      appId: "1:1075564158141:web:e784a1e3e208cb7f092bd4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name"+Room_names);
row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();



function Addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding user"
      });
      localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
 }

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
