var firebaseConfig = {
    apiKey: "AIzaSyB2TDqfslW4JWrh_0xodX4rc9zAxKwLQoU",
    authDomain: "letschat-f018d.firebaseapp.com",
    databaseURL: "https://letschat-f018d-default-rtdb.firebaseio.com",
    projectId: "letschat-f018d",
    storageBucket: "letschat-f018d.appspot.com",
    messagingSenderId: "361039645247",
    appId: "1:361039645247:web:faf273e612349aecfcc68a"
  };
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem('userName');
document.getElementById("display_username").innerHTML = "Welcome " + username + "!";

function addRoom() {
      roomName = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "to add a room name entered by the user"
      });
      localStorage.setItem('RoomName', roomName);
      window.location = "letsChatPage.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; 
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + "#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem('room_name', name);
      window.location = "letsChatPage.html";
}

function logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('room_name');
      window.location = "index.html";     
}