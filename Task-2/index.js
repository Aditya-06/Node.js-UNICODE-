// require all dependencies
const axios   = require("axios");
      express = require("express");

var app = express();
var joke;

// set default view engine type to be an ejs file
app.set("view engine", "ejs");


app.get("/:id", function(req, res) {
    axios.get(`https://sv443.net/jokeapi/v2/joke/${req.params.id}`) 
    .then(function (response) {
        // handle success
        console.log(response.data.error);
        if (response.data.error) {
        } else {    
            let jokes = {};

            if (response.data.error) {
                res.redirect('/error');
            } else {
                // since jokes are of two types, define our JSON in 2 different ways
            if (response.data.type === "twopart") {
                jokes = {
                    "_id": response.data.id,
                    "category": response.data.category,
                    "type": "twopart",
                    "joke": response.data.setup + "............." + response.data.delivery

                } 

            } else {
                jokes = {
                    "_id": response.data.id,
                    "category": response.data.category,
                    "type": "single",
                    "joke": response.data.joke
                }

                
            }
            
                
            // sending our JSON object as the render
            res.json(jokes)
            }

              
        }

            

        })

        // handle any errors
        .catch(function (error) {            
            console.log(error);
        })  
            

    });
// home page
app.get("/", function(req, res)  {
    res.render("index");    
});

// in case of any error
app.get("/error", function(req, res) {
   res.send("Oops, Thats an invalid category"); 
});

// specifying which port to run on
app.listen(3000,function() {
    console.log("The server is running on port 3000");
});