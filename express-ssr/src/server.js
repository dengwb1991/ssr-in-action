import express from 'express'
import React from 'react'
import App from './components/app'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

var app = express()

app.get('/', (req, res) => {
  const arr = [1, 2, 3]
  const html = renderToString(<App list={arr}/>)
  res.send(html)
  // res.send('<h1>Hello world!!</h1>')
})

app.listen(3000, function () {
  console.log('server started!!')
})