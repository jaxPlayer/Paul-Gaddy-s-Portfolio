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
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const myimg = document.getElementById('myimg');
const profilePic = document.getElementById('profilePic');
const updatePfp = document.getElementById('profilePicUpdate');
let file = {};
var imgUrl;

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		db = firebase.firestore()
		db.collection("userInfo").doc(user.uid).get()
			.then(function (doc) {
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
					document.getElementById("email").placeholder = email;
					document.getElementById("bio").placeholder = bio;
					document.getElementById("fln").placeholder = fln;
					document.getElementById("memberSince").placeholder = memberSince;
					document.getElementById("hobbies").placeholder = hobbies;
					document.getElementById("interestOne").placeholder = interestOne;
					document.getElementById("interestTwo").placeholder = interestTwo;
					document.getElementById("projOne").placeholder = projOne;
					document.getElementById("projTwo").placeholder = projTwo;
					document.getElementById("role").placeholder = role;
					document.getElementById("school").placeholder = school;
					document.getElementById("skillOne").placeholder = skillOne;
					document.getElementById("skillTwo").placeholder = skillTwo;
					document.getElementById("state").placeholder = state;
					document.getElementById("age").placeholder = age;
					myimg.src = downloadURL;
					profilePic.src = downloadURL;
				} else {
					// Logic for inexistent doc
				}
				updatePfp.addEventListener('change', e => {
					file = e.target.files[0];
					var storageRef = firebase.storage().ref("users").child(user.uid)
					storageRef.put(file)
					console.log("File uploaded to firebase storage")
					var downloadURL = doc.data().downloadURL;
					db.collection("userInfo").doc(user.uid).update({
						downloadURL: downloadURL
					}).then(function () {
						console.log('saved');
					}).catch(function (error) {
						console.log('error');
					})
				})
			});

	}
});