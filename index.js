const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
// usar informações provenientes de um formulário HTML
app.use(express.urlencoded({ extended: false }))

const users = ['Thiago Shibata', 'Diego Fernandes', 'Cleber Souza']

app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
