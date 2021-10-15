// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

(function (window) {
  "use strict";
  var App = window.App || {};

  window.FirebaseConfig = {
    apiKey: "AIzaSyAJWQA3Qb4Sq-FWXNZygqk9WH9uRpE7ihY",
    authDomain: "coffeerun-a86cc.firebaseapp.com",
    projectId: "coffeerun-a86cc",
    storageBucket: "coffeerun-a86cc.appspot.com",
    messagingSenderId: "949962057799",
    appId: "1:949962057799:web:a98f771bb09587f2016962",
    measurementId: "G-CR67ZLPRNY",
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
})(window);
