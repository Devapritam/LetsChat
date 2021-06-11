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

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();