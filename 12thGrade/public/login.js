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

const btnLogin = document.getElementById('login');
const Txtemail = document.getElementById('email');
const Txtpassword = document.getElementById('password');
  btnLogin.addEventListener('click', e => {
    const email = Txtemail.value;
    const password = Txtpassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error : " + errorMessage);
      });
    promise.catch(e => console.log(e.message));
})
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;
    window.location = "settings.html";
    console.log(user)
    if(user != null){
      // var email_id = user.email;
    }
  } 
});