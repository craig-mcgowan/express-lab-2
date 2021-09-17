const express = require("express")
const app = express()
let bottles = 99
const message = `<h1>${bottles} Bottles of Beer on the Wall</h1><a href ="/${bottles-1}">Take one down, pass it around!</a>`
app.listen(3000)

//tried to figure out how to pass in a predefined function into both get requests since it's the same code but I couldn't figure it out.
app.get("/", (req, res) => {
    console.log("hello")
  res.send(message);
});

app.get("/:number_of_bottles", (req, res) => {
    bottles = req.params.number_of_bottles;
    console.log(bottles)
    res.send(
      `<h1>${bottles} Bottles of Beer on the Wall</h1>
      <a href ="/${bottles - 1}">Take one down, pass it around!</a>`
    );
});