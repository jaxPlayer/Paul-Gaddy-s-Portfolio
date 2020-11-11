  $("btn btn-primary btn-block").click(function () {
      var auth = firebase.auth()
      var email = $("#email").val()
      auth.sendPasswordResetEmail(email).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

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