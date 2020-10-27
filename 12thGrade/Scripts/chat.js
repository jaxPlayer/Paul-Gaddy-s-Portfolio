function StartChat(id){
    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');
    hideChatList();
}
function showChatList(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
}
function hideChatList(){
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}
function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}
function signOut(){
    firebase.auth().signOut();
}
function onFirebaseStateChanged(){
    firebase.auth().onAuthStateChanged(onStateChanged);
}
function onStateChanged(user){
    if(user){
        alert(firebase.auth().currentUser.email + '\n' + firebase.auth().currentUser.displayName);
    }
}
onFirebaseStateChanged();