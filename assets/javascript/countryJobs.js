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

    var absoluteJavascript = 0;

    var absoluteNode= 0;

    var absolutePython = 0;

    var absoluteRuby = 0;

    var absolutePHP = 0;

    $('.addCountry').on('click', function(){

        var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
            "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
            "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
            "WI", "MO", "AR", "OK", "KS", "LA", "VA"];      

        function totalCountry(state){

            database.ref(state).once("value").then(function(snapshot){

                totalCountryJobs = totalCountryJobs + snapshot.val().totalJobs;

                database.ref().update({

                    totalCountry: totalCountryJobs

                })

            });

        }

        for(var i=0; i < states.length; i++){

            var state = states[i];

            totalCountry(state);
            
        }

        function addLanguages(state){

            database.ref(state).once("value").then(function(snapshot){

                absoluteJavascript = absoluteJavascript + snapshot.val().javascript;

                database.ref('javascript').update({

                    javascriptTotal: absoluteJavascript

                })

                absoluteNode = absoluteNode + snapshot.val().node;

                database.ref('node').update({

                    nodeTotal: absoluteNode

                })

                absolutePython = absolutePython + snapshot.val().python;

                database.ref('python').update({

                    pythonTotal: absolutePython

                })

                absoluteRuby = absoluteRuby + snapshot.val().ruby;

                database.ref('ruby').update({

                    rubyTotal: absoluteRuby

                })

                absolutePHP = absolutePHP + snapshot.val().php;

                database.ref('php').update({

                    phpTotal: absolutePHP

                })

            });

        }

        for(var i = 0; i < states.length; i++){

            addLanguages(states[i]);

        }

       function languagePopularity(state){

            database.ref(state).once("value").then(function(snapshot){

                var javascriptPercentagePopularity = snapshot.val().javascript/snapshot.val().totalJobs;

                var nodePercentagePopularity = snapshot.val().node/snapshot.val().totalJobs;

                var pythonPercentagePopularity = snapshot.val().python/snapshot.val().totalJobs;

                var rubyPercentagePopularity = snapshot.val().ruby/snapshot.val().totalJobs;

                var phpPercentagePopularity = snapshot.val().php/snapshot.val().totalJobs;

                database.ref(state).update({

                    javascriptPercentage: javascriptPercentagePopularity,

                    nodePercentage: nodePercentagePopularity,

                    pythonPercentage: pythonPercentagePopularity,

                    rubyPercentage: rubyPercentagePopularity,

                    phpPercentage: phpPercentagePopularity

                })

            });

        }

        for(var i=0; i < states.length; i++){

            var state = states[i];

           languagePopularity(state);
            
        }

    });

});