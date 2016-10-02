$(document).ready(function(){

    var config = {

        apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
        authDomain: "map-data-1e0ef.firebaseapp.com",
        databaseURL: "https://map-data-1e0ef.firebaseio.com",
        storageBucket: "map-data-1e0ef.appspot.com",
        messagingSenderId: "729944294128"

    };

    firebase.initializeApp(config);

    var database = firebase.database();

    var totalCountryJobs = 0;

    $('.addData').on('click', function(){

        var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
            "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
            "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
            "WI", "MO", "AR", "OK", "KS", "LA", "VA"];  

        function updateTotal(state) {

            database.ref(state).once("value").then(function(snapshot){

                var totalStateJob = snapshot.val().javascript + snapshot.val().node + snapshot.val().python + snapshot.val().ruby + snapshot.val().php;

                database.ref(state).update({

                    totalJobs: totalStateJob

                })

            });

        }

        for(var i=0 ; i < states.length; i++){

            var state = states[i];

            updateTotal(state);
            
        }

    });

});