  var firebaseConfig = {
      apiKey: "AIzaSyBZeQmL3ufHjnF5Eyu2tqhg-FIek6PB1jc",
      authDomain: "cnc-9562d.firebaseapp.com",
      databaseURL: "https://cnc-9562d.firebaseio.com",
      projectId: "cnc-9562d",
      storageBucket: "cnc-9562d.appspot.com",
      messagingSenderId: "590718245957",
      appId: "1:590718245957:web:0ac447782af0b73842572c",
      measurementId: "G-79048RDBW7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $("btn-resetPassword").click(function () {
      var auth = firebase.auth()
      var email = $("#email").val()
      auth.sendPasswordResetEmail(email).then(function () {})
          .catch(function (error) {

          })
  })

  //   const resetPassword = document.getElementById('resetPassword');

  //   const auth = firebase.auth();

  //   resetPassword.addEventListener('click', resetPasswordFunction);
  //   const resetPasswordFunction = () => {
  //       const mail = email.value;
  //       auth.sendPasswordResetEmail(mail)
  //           .then(() => {
  //               console.log('Password Reset Email Sent Successfully!');
  //           })
  //           .catch(error => {
  //               console.error(error);
  //           })
  //   }

  // var auth = firebase.auth();

  // function reset() {
  //     var email = document.getElementById('email');

  //     auth.sendPasswordResetEmail(email).then(function () {
  //         // Email sent.
  //         console.log('Email Sent');
  //         alert("Sent")
  //     }).catch(function (error) {

  //     });
  // }