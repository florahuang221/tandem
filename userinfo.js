import { getAuth } from "firebase/auth";

window.onload = (event) => {
    // Use this to retain user state between html pages.
    console.log("window loaded")

    const ui = new firebaseui.auth.AuthUI(firebase.auth())

    firebase.auth().onAuthStateChanged(function(user) {
        console.log("Check in")
        if (user) {
        // User is signed in.
            console.log("User logged in")
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            document.getElementById('user1').innerHTML = "true";
        } else {
            console.log("User signed out/no user")
            // User is signed out.
            document.getElementById('user1').innerHTML = "false";
        }
        
    });
};
