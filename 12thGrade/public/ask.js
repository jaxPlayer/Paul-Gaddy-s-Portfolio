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