import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBn5aU0lp_sLqWVDmLPQMjxXBhEDVIQ2NE",
    appId: "1:646589308601:web:2c92bbaba741dd1c848568",
    messagingSenderId: "646589308601",
    projectId: "projetocm1",
    storageBucket: "projetocm1.appspot.com",

};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };