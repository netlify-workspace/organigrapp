require('dotenv').config()
const express = require('express')
const jsonServer = require('json-server')
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')
const PORT = process.env.PORT
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(express.urlencoded())
// app.use('/api', jsonServer.router(__dirname + '/data.json'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/signin', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/edit', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/logout', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.post('/login', (req, res) => res.sendFile(__dirname + '/public/index.html'))
 
 
  /*let { accesskey } = req.body

  if (accesskey !== process.env.SECRET_KEY) {
    return res.redirect('/signin')
  }

  let token;
  try {
    token = jwt.sign(
      { user: 'admin' },
      process.env.SEED_AUTENTICATION,
      { expiresIn: process.env.EXPIRE_TOKEN }
    );
  }
  catch(err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error)
  }

  res.status(200)
    .cookie('accessjwt', token, { maxAge: 900000, httpOnly: true })
    .redirect('/edit')
})*/

app.listen(PORT, () => console.log(`Running on port:${PORT}` ))

function requireLogin(req, res, next) {
  const token = req.cookies?.accessjwt
  if(!token) {
    return res.redirect('/signin')
  }
  const decodedToken = jwt.verify(token, process.env.SEED_AUTENTICATION)
  if(decodedToken){
    next()
  }
  else{
    return logout()
  }
}

function logout(req, res) {
  return res.status(200)
    .clearCookie('accessjwt')
    .redirect('/signin')
}
