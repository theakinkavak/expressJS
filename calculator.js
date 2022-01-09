const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "//index.html");
});

app.post("/", function(req, res) {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    
    res.send(`The result of the calculation is ${result}.`);
});


app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "//bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height) / 100;
    const result = Math.round(weight / Math.pow(height,2));

    res.send(`Your BMI is ${result}.`)
});


app.listen(3000, function() {
    console.log("Server started on port 3000.");
});