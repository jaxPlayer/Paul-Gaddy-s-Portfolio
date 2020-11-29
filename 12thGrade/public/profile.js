const myimg = document.getElementById('myimg');
const profilePic = document.getElementById('profilePic');
const str = window.location.href;
const slug = str.split('=').pop();
console.log(slug)
console.log(window.location.href)
db = firebase.firestore()
usersRef = db.collection("userInfo").where("username", '==', slug)
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
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
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });