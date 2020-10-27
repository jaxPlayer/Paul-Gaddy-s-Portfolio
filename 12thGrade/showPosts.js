const firebaseConfig = {
    apiKey: "AIzaSyBZeQmL3ufHjnF5Eyu2tqhg-FIek6PB1jc",
    authDomain: "cnc-9562d.firebaseapp.com",
    databaseURL: "https://cnc-9562d.firebaseio.com",
    projectId: "cnc-9562d",
    storageBucket: "cnc-9562d.appspot.com",
    messagingSenderId: "590718245957",
    appId: "1:590718245957:web:0ac447782af0b73842572c",
    measurementId: "G-79048RDBW7"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var docRef = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid)
        const list_div = document.querySelector("#list_div");
        docRef.collection("userInfo").doc(user.uid).collection("ask").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().Post + "</h3></div>"
            });
        });
    } else {}
});