import firebase from 'firebase'

try {
    firebase.initializeApp({
        apiKey: "AIzaSyCWCxQ8teq9V8AkWFHp3i4DyBpouCYCRh8",
        authDomain: "synkron-f9611.firebaseapp.com",
        databaseURL: "https://synkron-f9611.firebaseio.com",
        projectId: "synkron-f9611",
        storageBucket: "synkron-f9611.appspot.com",
        messagingSenderId: "752005636723"
    })
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

export function signIn() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log("Sign in successful.")
    }).catch(function (error) {
        console.log("Fuck")
    });
}

export function signOut() {
    firebase.auth().signOut().then(function () {
        console.log("Sign out successful.")
    }).catch(function (error) {
        console.log("Fuck")
    });
}