const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    res.send('This is the homepage')
})

app.get("/greeting", (req, res) => {
  res.send(`hello Stranger`);
});

app.get('/greeting/:name', (req, res) => {
    res.send(`Yo ${req.params.name}, so glad you made it!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total, tipPercentage = req.params.tipPercentage
    res.send(`Your bill total was ${total}, so a ${tipPercentage}% tip would be $${total*tipPercentage/100}`)
})

app.get("/magic/:question", (req, res) => {
   const responses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful",
   ];
    const question= req.params.question
    res.send(`<h1>${question}? <span style="color: gray"> Hmmm... ${responses[Math.floor(Math.random()*responses.length)]}</span> </h1>    `)
})