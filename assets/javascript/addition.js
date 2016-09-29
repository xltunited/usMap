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

    $('.addData').on('click', function(){

        var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
            "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
            "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
            "WI", "MO", "AR", "OK", "KS", "LA", "VA"]


        for(var i=0; i < states.length; i++){

            
            database.ref(states[i]).once("value").then(function(snapshot){

                var totalStateJob = snapshot.val().javascript + snapshot.val().node + snapshot.val().python + snapshot.val().ruby + snapshot.val().php;

                database.ref(states[i]).update({

                    totalJobs: totalStateJob

                })

            });
            
        }

        var totalCountryJobs = 0;

        for(var i=0; i < states.length; i++){

            database.ref(states[i]).once("value").then(function(snapshot){

                totalCountryJobs = totalCountryJobs + snapshot.val().totalJobs;

            });

            database.ref().update({

                totalCountry: totalCountryJobs

            })
            
        }

       

    });

});