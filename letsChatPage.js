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

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();

            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['username'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span><i class='fa fa-thumbs-up'></i>&nbsp;Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });

}

function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('RoomName');
    window.location.replace('index.html');
}