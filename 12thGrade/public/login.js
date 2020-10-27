const firebaseConfig = {
//I took out the api keys
  };
  firebase.initializeApp(firebaseConfig);
  // var user = firebase.auth().currentUser;

  const btnLogin = document.getElementById('login');
  const Txtemail = document.getElementById('email');
  const Txtpassword = document.getElementById('password');

  btnLogin.addEventListener('click', e => {
    const email = Txtemail.value;
    const password = Txtpassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
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
    // function login(){
    //   var userEmail = document.getElementById("txtEmail").value;
    //   var userPass = document.getElementById("txtPassword").value;
    //   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     window.alert("Error : " + errorMessage);
    //   });
    //   window.location = "welcomepage.html";
    // }
    // function logout(){
    //   firebase.auth().signOut();
    // }
    // function logout(){
    //   firebase.auth().signOut().then(function() {
    
    //   }).catch(function(error) {
    
    //   });
      
    // }
  // function googleSignIn(){
  //   base_provider = new firebase.auth.GoogleAuthProvider()
  //   firebase.auth().signInWithPopup(base_provider).then(function(result){
  //     console.log(result)
  //     console.log("Success, Google Account Linked")
  //     window.location = "welcomepage.html";
  //    }).catch(function(err){
  //       console.log(err)
  //       console.log("Failed to sign in")
  //    })
    //  window.location = "welcomepage.html";
  // }
