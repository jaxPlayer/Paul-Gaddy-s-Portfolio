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
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
        db = firebase.firestore()
		db.collection("userInfo").doc(user.uid).get()

        document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html">PrograMeet</a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                    <li class="nav-item"><a class="nav-link active" href="contactPageNew/contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-icon%2Fsettings-gear-ios-7-interface-symbol_318-34774.jpg&f=1&nofb=1" href="settings.html" id="pic"></a></li>
                    <li class="nav-item"><a class="nav-link active"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fshopping-180%2F32%2F43-512.png&f=1&nofb=1" id="pic" class=""><a class="nav-link active" ></a></li>
                    <button class="btn btn-primary" id="logout" type="button" onclick="logout()">Logout</button>
                </ul></div>
        </div>
        <hr>`
    } else {
        document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html"><a class="navbar-brand" href="index.html">PrograMeet</a></a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>

                    <li class="nav-item"><a class="nav-link active" href="contactPageNew/contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active" href="login.html">Login</a></li>
                    <button class="btn btn-primary" type="button"><a href="signup.html">Signup</a></button>
                </ul></div>
        </div>
        <hr>`
    }
})
function logout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}
      
    
