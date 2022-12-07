const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = (num1 + num2)

    res.send("The result is " + result + ".")
})

app.get("/bmiCalculator.html", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator.html", function(req, res){
    var num1 = Number(req.body.weight)
    var num2 = Number(req.body.height)
    var result = ((703 * num1)/(num2 * num2))

    console.log(num1, num2)

    res.send("Your BMI is " + result + ".")
})

app.listen(3000);