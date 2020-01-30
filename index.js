const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan("dev"))

app.get('/', (req, res, next) => {
	res.send('<h1>Hello World</h1>')
})

app.get('/puppies', (req, res, next) => {
	res.send('<h1>These are puppies</h1>')
})

app.get('/puppies/something', (req, res, next) => {
	res.send('<h1>WE ARE ON THE SOMETHING PAGE</h1>')
})

app.get('/puppies/:puppyId', (req, res, next) => {
	const puppy = req.params.puppyId
	res.send(`<h1>Here is puppy ${puppy}</h1>`)
})


app.get('/kittens', (req, res, next) => {
	res.json('<h1>These are kittens</h1>')
})

app.listen(1337, () => {
	console.log('Listening on port 1337...')
})
