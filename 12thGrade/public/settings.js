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
var auth = firebase.auth().currentUser;
const buttonTwo = document.getElementById("buttonTwo");
const myimg = document.getElementById("myimg");
const profilePic = document.getElementById('profilePic');
const updatePfp = document.getElementById('profilePicUpdate');
let file = {};
var imgUrl;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db = firebase.firestore()
        db.collection("userInfo").doc(user.uid).get()
            .then(function(doc) {
                if (doc.exists) {
                    var email = doc.data().email;
                    var bio = doc.data().bio;
                    var downloadURL = doc.data().downloadURL;
                    var fln = doc.data().fln;
                    var hobbies = doc.data().hobbies;
                    var interestOne = doc.data().interestOne;
                    var interestTwo = doc.data().interestTwo;
                    var projOne = doc.data().projOne;
                    var projTwo = doc.data().projTwo;
                    var role = doc.data().role;
                    var school = doc.data().school;
                    var skillOne = doc.data().skillOne;
                    var skillTwo = doc.data().skillTwo;
                    var state = doc.data().state;
                    var age = doc.data().age;
                    var memberSince = doc.data().memberSince;
                    document.getElementById("email").value =  email;
                    document.getElementById("bio").value = bio;
                    document.getElementById("fln").value = fln;
                    document.getElementById("memberSince").value = memberSince;
                    document.getElementById("hobbies").value = hobbies;
                    document.getElementById("interestOne").value = interestOne;
                    document.getElementById("interestTwo").value = interestTwo;
                    document.getElementById("projOne").value = projOne;
                    document.getElementById("projTwo").value = projTwo;
                    document.getElementById("role").value = role;
                    document.getElementById("school").value = school;
                    document.getElementById("skillOne").value = skillOne;
                    document.getElementById("skillTwo").value = skillTwo;
                    document.getElementById("state").value = state;
                    document.getElementById("age").value = age;
                    profilePic.src = downloadURL;
                    document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html">PrograMeet</a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                    <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active"><img class="side-link-icons profile w-inline-block" id="pic"></a></li>
                   <li class="nav-item"><a class="nav-link active" href="settings.html"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fshopping-180%2F32%2F43-512.png&f=1&nofb=1" id="pic" class="pic"><a class="nav-link active" ></a></li>
                    <button class="btn btn-primary" type="button" onclick="logout()">Logout</button>
                </ul></div>
        </div>
        <hr>`
                    // profilePic.src = downloadURL;
                    updatePfp.addEventListener('change', e => {
                        file = e.target.files[0];
                        var storageRef = firebase.storage().ref("users").child(user.uid)
                        storageRef.put(file)
                        console.log("File uploaded to firebase storage")
                        var downloadURL = doc.data().downloadURL;
                        db.collection("userInfo").doc(user.uid).update({
                            downloadURL: downloadURL
                        }).then(function() {
                            console.log('saved');
                        }).catch(function(error) {
                            console.log('error');
                        })
                    })
                    
                    // buttonTwo.addEventListener('click', e => {

                    //     firebase.firestore().collection("userInfo").doc(user.uid).update({
                    //         state: state,
                    //         age: age,
                    //         bio: bio,
                    //         role: role,
                    //         projOne: projOne,
                    //         projTwo: projTwo,
                    //         school: school,
                    //         memberSince: memberSince,
                    //         hobbies: hobbies,
                    //         skillOne: skillOne,
                    //         skillTwo: skillTwo
                    //     })
                    //     alert("updated")
                    // })

                } else {
                    document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html"><a class="navbar-brand" href="index.html">PrograMeet</a></a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                    <!-- <li class="nav-item"><a class="nav-link active" href="ask.html">Ask</a></li> -->
                    <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active" href="login.html">Login</a></li>
                    <button class="btn btn-primary" type="button">Signup</button>
                </ul></div>
        </div>
        <hr>`
                }


            });
    }
});