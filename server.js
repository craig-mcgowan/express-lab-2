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