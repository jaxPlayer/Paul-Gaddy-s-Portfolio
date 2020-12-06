const firebaseConfig = {

};
firebase.initializeApp(firebaseConfig);

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submit = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;

nextBtnFirst.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
// submitBtn.addEventListener("click", function(){
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
//   setTimeout(function(){
//     alert("Your Form Successfully Signed up");
//     location.reload();
//   },800);
// });

prevBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

const email = document.getElementById('email');
const pword = document.getElementById('pword');
const fileUploader = document.getElementById('fileUploader');
var docRef = firebase.firestore();
var auth = firebase.auth();

let file = {};
var imgUrl;

fileUploader.addEventListener('change', function (e) {
  file = e.target.files[0];
})

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2-3}$/;
// if (email.match(pattern)) {
//   form.classList.add("valid");
//   form.classList.remove("invalid");
// } else {
//   form.classList.remove("valid");
//   form.classList.add("invalid");
//   text.innerHTML = "Enter valid email address";
//   text.style.color = "#ff0000";
// }

// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");


// pword.onfocus = function () {
//   document.getElementById("message").style.display = "block";
// }

// pword.onblur = function () {
//   document.getElementById("message").style.display = "none";
// }

// pword.onkeyup = function () {

//   var lowerCaseLetters = /[a-z]/g;
//   if (pword.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }


//   var upperCaseLetters = /[A-Z]/g;
//   if (pword.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   var numbers = /[0-9]/g;
//   if (pword.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   if (pword.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }

document.getElementById('contactForm');

submit.addEventListener('click', e => {

  // function signUpUser() {
  firebase.auth().createUserWithEmailAndPassword(email.value, pword.value).then(auth => {

    var storageRef = firebase.storage().ref("users").child(auth.user.uid)
    var uploadTask = storageRef.put(file)
    uploadTask.on('state_changed', function (snapshot) {
      var progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      var uploader = document.getElementById('uploader');
      uploader.value = progress;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
      }
    }, function (error) {
      console.log(error);
    }, function () {

      // get the uploaded image url back 
      uploadTask.snapshot.ref.getDownloadURL().then(
        function (downloadURL) {
          e.preventDefault();
          var email = getInputVal('email');
          var fln = getInputVal('fln');
          var state = getInputVal('state');
          var age = getInputVal('age');
          var role = getInputVal('role');
          var school = getInputVal('school');
          var interestOne = getInputVal('interestOne');
          var interestTwo = getInputVal('interestTwo');
          var skillOne = getInputVal('skillOne');
          var skillTwo = getInputVal('skillTwo');
          var hobbies = getInputVal('hobbies');
          var bio = getInputVal('bio');
          var projOne = getInputVal('projOne');
          var projTwo = getInputVal('projTwo');
          var username = getInputVal('username');

          function getInputVal(id) {
            return document.getElementById(id).value;
          }

          docRef.collection("userInfo").doc(auth.user.uid).set({
            email: email,
            fln: fln,
            state: state,
            age: age,
            role: role,
            school: school,
            interestOne: interestOne,
            interestTwo: interestTwo,
            skillOne: skillOne,
            skillTwo: skillTwo,
            hobbies: hobbies,
            bio: bio,
            projOne: projOne,
            projTwo: projTwo,
            memberSince: "",
            extraInfo: "",
            username: username,
            downloadURL: downloadURL
          }).then(function () {
            console.log('saved');
          }).catch(function (error) {
            console.log('error');
          })
           firebase.database().ref('users/' + auth.user.uid).set({
            name: fln,
            email:email,
            photoURL:downloadURL
          })
        })
    })
  })
})
