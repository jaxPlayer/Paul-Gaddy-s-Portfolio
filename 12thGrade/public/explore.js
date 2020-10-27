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

const userListUI = document.getElementById("userList");
var storage = firebase.storage();
var storageRef = storage.ref("users");

db = firebase.firestore()
usersRef = db.collection("userInfo")
usersRef.get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var downloadURL = doc.data().downloadURL;
            var fln = doc.data().fln;
            var username = doc.data().username;
            var age = doc.data().age;
            var bio = doc.data().bio;
            var extraInfo = doc.data().extraInfo;
            var hobbies = doc.data().hobbies;
            var interestOne = doc.data().interestOne;
            var interestTwo = doc.data().interestTwo;
            var memberSince = doc.data().memberSince;
            var projOne = doc.data().projOne;
            var projTwo = doc.data().projTwo;
            var role = doc.data().role;
            var school = doc.data().school;
            var state = doc.data().state;
            var skillOne = doc.data().skillOne;
            var skillTwo = doc.data().skillTwo;
            let i = 0;
            display(i, downloadURL);
            const queryString = window.location.href;

            function display(row) {
                let new_html = '';
                new_html += '<tr>';
                new_html += '<td>';
                new_html += '<td>';
                new_html += '<div class="grid-item">';
                new_html += '<img src= "' + downloadURL + '">';
                new_html += '<h2 class="fln"> ' + fln + '';
                new_html += '</h2>';
                new_html += '</div>';
                new_html += '</td>';
                new_html += '</td>';
                new_html += '</tr>';
                new_html += row;
                $('#grid-container').append(new_html);
                let eachName = document.querySelector("#grid-container tr:last-child .fln");
                eachName.addEventListener("click", userClicked);

                function userClicked() {
                    var i = 0;
                    const queryString = window.location.href;
                    window.location = queryString.concat('/?user', "=", username);
                }

            }
        })
    })