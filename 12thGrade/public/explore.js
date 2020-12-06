  const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);
const userListUI = document.getElementById("userList");
var storage = firebase.storage();
var storageRef = storage.ref("users");

db = firebase.firestore()
usersRef = db.collection("userInfo")
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html">PrograMeet</a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                    <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-icon%2Fsettings-gear-ios-7-interface-symbol_318-34774.jpg&f=1&nofb=1" class="side-link-icons profile w-inline-block" id="pic"></a></li>
                   <li class="nav-item"><a class="nav-link active"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fshopping-180%2F32%2F43-512.png&f=1&nofb=1" id="pic" class="pic"><a class="nav-link active" ></a></li>
                    <button class="btn btn-primary" type="button" onclick="logout()">Logout</button>
                </ul></div>
        </div>
        <hr>`
    usersRef.get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var downloadURL = doc.data().downloadURL;
            var fln = doc.data().fln;
            var username = doc.data().username;
            let i = 0;
            display(i, downloadURL);

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
} else{
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
        alert("Error, you must be logged in to view this page")
}
})
