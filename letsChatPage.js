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
room_name = localStorage.getItem('RoomName');

function send() {
    message = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        username: username,
        message: message,
        like: 0
    });

    document.getElementById("message").innerHTML = "";
}

function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('RoomName');
    window.location.replace('index.html');
}