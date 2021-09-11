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