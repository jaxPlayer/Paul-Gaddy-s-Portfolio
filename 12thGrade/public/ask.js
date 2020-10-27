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
const inputTextField = document.getElementById("latestHotDogStatus");
const saveButton = document.getElementById("saveButton");
const searchButton = document.getElementById("searchButton");
const search = document.getElementById('querySearch');

function openForm() {
  document.getElementById("form-popup purple-border").style.display = "block";
}

function closeForm() {
  document.getElementById("form-popup purple-border").style.display = "none";
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid)
    const list_div = document.querySelector("#child");
    docRef
      .collectionGroup("ask")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().Post + "</h3></div>";
        });
      });

    saveButton.addEventListener('click', function () {
      const textToSave = inputTextField.value;
      docRef
        .collection("userInfo")
        .doc(user.uid)
        .collection("ask")
        // .collectionGroup("ask")
        .add({
          Post: textToSave
        }).then(function () {
          console.log('saved')
        }).catch(function (error) {
          console.log('error');
        })
    })
    searchButton.addEventListener('click', function () {
      const querySearch = getInputVal('querySearch');

      function getInputVal(id) {
        return document.getElementById(id).value;
      }
      docRef.collectionGroup("ask").where("Post", '==', querySearch)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().Post + "</h3></div>";
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    })
  }

})

function logout() {
  firebase.auth().signOut();
}