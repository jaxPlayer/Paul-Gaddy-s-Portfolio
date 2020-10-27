const firebaseConfig = {
//I took out the api keys
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
